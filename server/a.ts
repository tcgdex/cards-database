#!/usr/bin/env node
import ts from 'typescript'
import fs from 'fs'
import path from 'path'

const BUILTIN_FIELDS = new Set([
	'valueOf', 'toString', 'hasOwnProperty', 'toLocaleString',
	'isPrototypeOf', 'propertyIsEnumerable', '__proto__'
])

const PRIMITIVE_FLAGS =
	ts.TypeFlags.String
	| ts.TypeFlags.Number
	| ts.TypeFlags.Boolean
	| ts.TypeFlags.BigInt
	| ts.TypeFlags.Enum
	| ts.TypeFlags.EnumLiteral

function getJsDocComment(sym: ts.Symbol) {
	// Try @description tag first
	const jsDocs = sym.getJsDocTags()
	const descriptionTag = jsDocs.find(t => t.name === 'description')
	if (descriptionTag && descriptionTag.text) {
	// console.log(descriptionTag.text)
		return `"""${descriptionTag.text.map((it) => it.text).join('\n')}"""`
	}

	// fallback: full JSDoc comment
	const commentParts = sym.getDocumentationComment(ts.createProgram([], {}).getTypeChecker())
	if (commentParts && commentParts.length) {
		const text = commentParts.map(c => c.text).filter(Boolean).join(' ')
		if (text) return `"""${text}"""`
	}

	return null
}


/**
 * Convert TypeScript type to GraphQL type string
 */
function tsTypeToGql(type, checker, depth = 0, nameHint: string | undefined = undefined, defs: Array<string> = [], seen = new Set()) {
	if (type.flags & PRIMITIVE_FLAGS) {
		if (type.flags & ts.TypeFlags.String) return 'String'
		if (type.flags & ts.TypeFlags.Number) return 'Float'
		if (type.flags & ts.TypeFlags.Boolean) return 'Boolean'
		return 'String'
	}

	if (type.symbol?.name === 'Array' && type.typeArguments?.length) {
		return `[${tsTypeToGql(type.typeArguments[0], checker, depth, nameHint, defs, seen)}]`
	}

	const props = type.getProperties()
	if (props.length > 0) {
		const realProps = props.filter(p => !BUILTIN_FIELDS.has(p.name))
		if (realProps.length === 0) return 'String'

		const subName = (nameHint ? nameHint[0].toUpperCase() + nameHint.slice(1) : 'Anonymous') + 'Sub' + depth
		if (!seen.has(subName)) {
			seen.add(subName)
			defs.push(buildGraphQLFromType(subName, type, checker, defs, depth + 1, seen))
		}
		return subName
	}

	return 'String'
}

/**
 * Build GraphQL type definition string from TypeScript type
 */
function buildGraphQLFromType(name: string, type: ts.Type, checker: ts.TypeChecker, defs: Array<string>, depth = 0, seen = new Set()) {
	const props = type.getProperties().filter(p => !BUILTIN_FIELDS.has(p.name))
	const fields = props.map(sym => {
		const decl = sym.valueDeclaration || sym.declarations?.[0]
		const t = checker.getTypeOfSymbolAtLocation(sym, decl as ts.Declaration)
		const gqlType = tsTypeToGql(t, checker, depth + 1, sym.name, defs, seen)
		const optional = (sym.flags & ts.SymbolFlags.Optional) !== 0

		const comment = getJsDocComment(sym)
		return `${comment ? '\t' + comment + '\n' : ''}\t${sym.name}: ${gqlType}${optional ? '' : '!'}`
	})
	return `type ${name} {\n${fields.join('\n\n')}\n}`
}

/**
 * Main function
 */
function main(file, targetTypeName) {
	const program = ts.createProgram([file], { skipLibCheck: true })
	const checker = program.getTypeChecker()
	const source = program.getSourceFile(file)
	const defs: Array<string> = []
	const seen = new Set()

	ts.forEachChild(source as ts.SourceFile, node => {
		if ((ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) &&
				node.name.text === targetTypeName) {
			const type = checker.getTypeAtLocation(node)
			defs.push(buildGraphQLFromType(targetTypeName, type, checker, defs, 0, seen))
		}
	})

	if (defs.length === 0) {
		console.error(`Type '${targetTypeName}' not found in ${file}`)
		process.exit(1)
	}

	console.log(defs.reverse().join('\n\n'))
}

/**
 * CLI
 */
const [,, file, typeName] = process.argv
if (!file || !typeName) {
	console.error('Usage: node ts-to-gql-with-comments.js <file.ts> <TypeName>')
	process.exit(1)
}

main(path.resolve(file), typeName)
