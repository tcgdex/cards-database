import { ArrayExpression, Identifier, JSCodeshift, Literal, ObjectExpression, Property, Transform } from "jscodeshift"

interface ObjectField {
	type: 'Object'
	items: Record<string, Field>
	item: ObjectExpression
}

interface EndField {
	type: 'Literal'
	item: Literal
}

interface ArrayField {
	type: 'Array'
	items: Array<Field>
	item: ArrayExpression
}

type Field = ObjectField | EndField | ArrayField
type Possible = ObjectExpression | ArrayExpression | Literal

function processItem(value: Possible): Field {

	if (value.type === 'ObjectExpression') {
		return simplify(value)
	} else if (value.type === 'ArrayExpression') {
		const field: Field = {
			type: 'Array',
			items: [],
			item: value
		}
		value.elements.forEach((it) => {
			field.items.push(processItem(it as Possible))
		})
		return field
	} else {
		return {
			type: 'Literal',
			item: value
		}
	}
}

function simplify(base: ObjectExpression): ObjectField {
	const list: ObjectField['items'] = {}
	base.properties.forEach((it) => {
		const item = it as Property
		const key = (item.key as Identifier).name
		list[key] = processItem(item.value as Possible)
	})
	return {
		type: 'Object',
		items: list,
		item: base
	}
}

function set(j: JSCodeshift, path: ObjectExpression | ArrayExpression, value: Possible, key: string | number, options?: {override?: boolean}) {

	let exists = false
	if (path.type === 'ObjectExpression') {
		path.properties.forEach((p) => {
			const prop = p as Property
			if ((prop.key as Identifier).name === (key + '')) {
				exists = true
				if (!options?.override) {
					console.warn('Property already exist, add the option override to change it')
					return
				}
				prop.value = value
			}
		})
		if (exists) {return}

		if (key.toString().includes('-')) {
			key = `'${key.toString()}'`
		}

		path.properties.push(j.property('init', j.identifier(key + ''), value))
	} else {

	}
}

function remove(path: ObjectExpression | ArrayExpression, key: string | number) {
	if (path.type === 'ObjectExpression') {
		const index = path.properties.findIndex((p) => ((p as Property).key as Identifier).name === (key + ''))
		if (index === -1) {
			return
		}
		path.properties.splice(index)
	} else {

	}
}

/**
 * Start editing here !
 */
const transformer: Transform = (file, api) => {
	const j = api.jscodeshift

	const root = j(file.source)
	return root
		.find(j.ObjectExpression)
		.forEach((path, index) => {
			if (index !== 0) return
			let simplified = simplify(path.node)
			const name = simplified.items.name as ObjectField
			name.items.fr

			// Example remove field
			remove(name.item as ObjectExpression, 'fr')

			// Example Set/Add regulationMArk to cards
			// set(j, name.items.fr, j.literal('D'), 'regulationMark')

		})
		.toSource({useTabs: true, lineTerminator: '\n'}).replace(/    /g, '	')
}

module.exports = transformer
module.exports.parser = 'ts'
