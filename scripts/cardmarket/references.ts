import ts from 'typescript'

import type { CardmarketReference, CardSourceInfo, ObjectLayout, SourceEdit } from './types'

function getPropertyName(name: ts.PropertyName): string | undefined {
	if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) return name.text
	return undefined
}

function getLineIndent(source: string, position: number): string {
	const lineStart = source.lastIndexOf('\n', position - 1) + 1
	return source.slice(lineStart, position).match(/^[\t ]*/)?.[0] ?? ''
}

function getObjectLayout(source: string, object: ts.ObjectLiteralExpression): ObjectLayout {
	const closePosition = object.getEnd() - 1
	const firstProperty = object.properties[0]
	const lastProperty = object.properties[object.properties.length - 1]
	const betweenLastAndClose = lastProperty
		? source.slice(lastProperty.getEnd(), closePosition)
		: source.slice(object.getStart() + 1, closePosition)
	const closeIndent = getLineIndent(source, closePosition)
	const propertyIndent = firstProperty
		? getLineIndent(source, firstProperty.getStart())
		: `${closeIndent}\t`
	const newline = source.includes('\r\n') ? '\r\n' : '\n'
	return {
		start: object.getStart(),
		closePosition,
		lastPropertyEnd: lastProperty?.getEnd(),
		betweenLastAndClose,
		propertyIndent,
		closeIndent,
		newline,
		hasProperties: object.properties.length > 0,
		hasTrailingComma: /^\s*,/.test(betweenLastAndClose)
	}
}

function getIndentUnit(layout: ObjectLayout): string {
	if (layout.propertyIndent.includes('\t') || layout.closeIndent.includes('\t')) return '\t'
	const width = layout.propertyIndent.length - layout.closeIndent.length
	return ' '.repeat(width > 0 ? width : 4)
}

function findCardObject(sourceFile: ts.SourceFile): ts.ObjectLiteralExpression | undefined {
	let cardObject: ts.ObjectLiteralExpression | undefined
	function visit(node: ts.Node) {
		if (cardObject) return
		if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === 'card' && node.initializer && ts.isObjectLiteralExpression(node.initializer)) {
			cardObject = node.initializer
			return
		}
		if (ts.isExportAssignment(node) && ts.isObjectLiteralExpression(node.expression)) {
			cardObject = node.expression
			return
		}
		ts.forEachChild(node, visit)
	}
	visit(sourceFile)
	return cardObject
}

export function inspectCardSource(source: string): CardSourceInfo {
	const sourceFile = ts.createSourceFile('card.ts', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
	const cardObject = findCardObject(sourceFile)
	if (!cardObject) return { references: [] }

	const references: CardmarketReference[] = []
	let referenceOrdinal = 0
	let topLevelThirdParty: ObjectLayout | undefined
	const cardObjectLayout = getObjectLayout(source, cardObject)

	function visitObject(object: ts.ObjectLiteralExpression, propertyPath: string[]) {
		for (const property of object.properties) {
			if (!ts.isPropertyAssignment(property)) continue
			const propertyName = getPropertyName(property.name)
			if (propertyPath.length === 0 && propertyName === 'thirdParty' && ts.isObjectLiteralExpression(property.initializer)) {
				topLevelThirdParty = getObjectLayout(source, property.initializer)
			}
			if (propertyName === 'cardmarket' && ts.isNumericLiteral(property.initializer)) {
				references.push({
					idProduct: Number(property.initializer.text),
					location: [...propertyPath, 'cardmarket'].join('.').replace(/\.\[/g, '['),
					referenceOrdinal,
					sourceStart: property.initializer.getStart(sourceFile),
					sourceEnd: property.initializer.getEnd()
				})
				referenceOrdinal++
			}
			visitExpression(property.initializer, propertyName === undefined ? propertyPath : [...propertyPath, propertyName])
		}
	}

	function visitExpression(expression: ts.Expression, propertyPath: string[]) {
		if (ts.isObjectLiteralExpression(expression)) {
			visitObject(expression, propertyPath)
			return
		}
		if (ts.isArrayLiteralExpression(expression)) {
			expression.elements.forEach((element, index) => {
				if (element) visitExpression(element, [...propertyPath, `[${index}]`])
			})
			return
		}
		ts.forEachChild(expression, (child) => visitExpression(child as ts.Expression, propertyPath))
	}

	visitObject(cardObject, [])
	return { references, cardObject: cardObjectLayout, topLevelThirdParty }
}

export function addCardmarketProperty(source: string, layout: ObjectLayout, idProduct: number): SourceEdit {
	if (!layout.hasProperties || layout.lastPropertyEnd === undefined) {
		const insertion = layout.betweenLastAndClose.includes('\n')
			? `${layout.betweenLastAndClose}${layout.propertyIndent}cardmarket: ${idProduct},${layout.newline}${layout.closeIndent}`
			: `${layout.betweenLastAndClose}cardmarket: ${idProduct}`
		return { start: layout.start + 1, end: layout.closePosition, replacement: insertion }
	}
	const separator = layout.hasTrailingComma
		? layout.betweenLastAndClose
		: `,${layout.betweenLastAndClose}`
	const replacement = layout.betweenLastAndClose.includes('\n')
		? `${separator}${layout.propertyIndent}cardmarket: ${idProduct},${layout.newline}${layout.closeIndent}`
		: `${separator}cardmarket: ${idProduct},`
	return { start: layout.lastPropertyEnd, end: layout.closePosition, replacement }
}

export function addThirdPartyObject(source: string, layout: ObjectLayout, idProduct: number): SourceEdit {
	const nestedIndent = `${layout.propertyIndent}${getIndentUnit(layout)}`
	const property = layout.betweenLastAndClose.includes('\n')
		? `thirdParty: {${layout.newline}${nestedIndent}cardmarket: ${idProduct},${layout.newline}${layout.propertyIndent}}${layout.hasTrailingComma ? ',' : ''}`
		: `thirdParty: { cardmarket: ${idProduct} }${layout.hasTrailingComma ? ',' : ''}`
	if (!layout.hasProperties || layout.lastPropertyEnd === undefined) {
		const insertion = layout.betweenLastAndClose.includes('\n')
			? `${layout.betweenLastAndClose}${layout.propertyIndent}${property}${layout.newline}${layout.closeIndent}`
			: `${layout.betweenLastAndClose}${property}`
		return { start: layout.start + 1, end: layout.closePosition, replacement: insertion }
	}
	const separator = layout.hasTrailingComma
		? layout.betweenLastAndClose
		: `,${layout.betweenLastAndClose}`
	const replacement = layout.betweenLastAndClose.includes('\n')
		? `${separator}${layout.propertyIndent}${property}${layout.newline}${layout.closeIndent}`
		: `${separator}${property}`
	return { start: layout.lastPropertyEnd, end: layout.closePosition, replacement }
}
