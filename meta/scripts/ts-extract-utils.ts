import ts from 'typescript'
import fs from 'fs'

/**
 * Extract the default export object from a TypeScript file
 * @param filePath Path to the TypeScript file
 * @returns The exported object or null if not found
 */
export function extractFile(filePath: string): any {
	try {
		// Read the file content
		const sourceCode = fs.readFileSync(filePath, 'utf-8')

		// Create TypeScript source file
		const sourceFile = ts.createSourceFile(
			filePath,
			sourceCode,
			ts.ScriptTarget.Latest,
			true
		)

		let exportedObject: any = null

		// Visitor function to traverse the AST
		function visit(node: ts.Node) {
			// Look for export default statements
			if (ts.isExportAssignment(node) && !node.isExportEquals) {
				// Handle: export default someVariable
				if (ts.isIdentifier(node.expression)) {
					const variableName = node.expression.text
					// Find the variable declaration
					exportedObject = findVariableValue(sourceFile, variableName)
				}
				// Handle: export default { ... }
				else if (ts.isObjectLiteralExpression(node.expression)) {
					exportedObject = parseObjectLiteral(node.expression)
				}
			}
			// Look for const variable = { ... }; export default variable pattern
			else if (ts.isVariableStatement(node)) {
				const declaration = node.declarationList.declarations[0]
				if (declaration && ts.isVariableDeclaration(declaration) && declaration.initializer) {
					if (ts.isObjectLiteralExpression(declaration.initializer)) {
						const variableName = declaration.name.getText()
						// Store this for potential export default reference
						if (!exportedObject) {
							const obj = parseObjectLiteral(declaration.initializer)
							// Check if this variable is exported as default
							const isExportedDefault = checkIfExportedDefault(sourceFile, variableName)
							if (isExportedDefault) {
								exportedObject = obj
							}
						}
					}
				}
			}

			ts.forEachChild(node, visit)
		}

		visit(sourceFile)
		return exportedObject
	} catch (error) {
		console.error(`Error parsing ${filePath}:`, error.message)
		return null
	}
}

/**
 * Check if a variable is exported as default
 */
function checkIfExportedDefault(sourceFile: ts.SourceFile, variableName: string): boolean {
	let isExported = false

	function visit(node: ts.Node) {
		if (ts.isExportAssignment(node) && !node.isExportEquals) {
			if (ts.isIdentifier(node.expression) && node.expression.text === variableName) {
				isExported = true
			}
		}
		ts.forEachChild(node, visit)
	}

	visit(sourceFile)
	return isExported
}

/**
 * Find the value of a variable declaration
 */
function findVariableValue(sourceFile: ts.SourceFile, variableName: string): any {
	let value: any = null

	function visit(node: ts.Node) {
		if (ts.isVariableStatement(node)) {
			const declaration = node.declarationList.declarations[0]
			if (declaration && ts.isVariableDeclaration(declaration)) {
				const name = declaration.name.getText()
				if (name === variableName && declaration.initializer) {
					if (ts.isObjectLiteralExpression(declaration.initializer)) {
						value = parseObjectLiteral(declaration.initializer)
					}
				}
			}
		}
		ts.forEachChild(node, visit)
	}

	visit(sourceFile)
	return value
}

/**
 * Parse an ObjectLiteralExpression into a plain JavaScript object
 */
function parseObjectLiteral(node: ts.ObjectLiteralExpression): any {
	const result: any = {}

	for (const property of node.properties) {
		if (ts.isPropertyAssignment(property)) {
			const key = getPropertyName(property.name)
			const value = parseExpression(property.initializer)
			if (key !== null) {
				result[key] = value
			}
		}
	}

	return result
}

/**
 * Get the property name from a PropertyName node
 */
function getPropertyName(name: ts.PropertyName): string | null {
	if (ts.isIdentifier(name)) {
		return name.text
	} else if (ts.isStringLiteral(name)) {
		return name.text
	} else if (ts.isNumericLiteral(name)) {
		return name.text
	}
	return null
}

/**
 * Parse various expression types into JavaScript values
 */
function parseExpression(expr: ts.Expression): any {
	if (ts.isStringLiteral(expr)) {
		return expr.text
	} else if (ts.isNumericLiteral(expr)) {
		return Number(expr.text)
	} else if (expr.kind === ts.SyntaxKind.TrueKeyword) {
		return true
	} else if (expr.kind === ts.SyntaxKind.FalseKeyword) {
		return false
	} else if (expr.kind === ts.SyntaxKind.NullKeyword) {
		return null
	} else if (ts.isObjectLiteralExpression(expr)) {
		return parseObjectLiteral(expr)
	} else if (ts.isArrayLiteralExpression(expr)) {
		return expr.elements.map(parseExpression)
	}
	// For complex expressions, return the source text
	return expr.getText()
}
