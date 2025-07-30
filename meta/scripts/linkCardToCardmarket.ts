import { ArrayExpression, Identifier, JSCodeshift, Literal, ObjectExpression, Property, Transform } from "jscodeshift"
import cardsJSON from '../../products_singles_6.json'
import pathUtils from 'path/posix'
import { extractFile } from './ts-extract-utils'
import { Card, Set } from '../../interfaces'

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

function exists(path: ObjectExpression | ArrayExpression, key: string | number) {
	if (path.type === 'ObjectExpression') {
		path.properties.forEach((p) => {
			const prop = p as Property
			if ((prop.key as Identifier).name === (key + '')) {
				return true
			}
		})
		return false
	} else {

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

function rename(parent: ObjectExpression, oldKey: string, newKey: string) {
	parent.properties.forEach((p) => {
		if (p.key.name === oldKey) {
			p.key.name = newKey
		}
	})
}

/**
 * Start editing here !
 */
const transformer: Transform = (file, api) => {
	const j = api.jscodeshift
	console.log(file.path)

	const root = j(file.source)
		// extract the file name from `import Set from '../Hidden Fates'`
	const setName = root.find(j.ImportDeclaration).filter((path) => {
		const source = path.node.source.value! as string
		return source.startsWith('../') && !source.startsWith('../../')
	}).get('source').value.value
	const setPath = pathUtils.resolve(file.path, '../', setName)
	const setData: Omit<Set, 'serie'> = extractFile(setPath + '.ts')
	const cardData: Omit<Card, 'set'> = extractFile(file.path)

	return root
		.find(j.ObjectExpression)
		.forEach((path, index) => {
			if (index !== 0) return
			const filename = pathUtils.basename(file.path, '.ts')
			let simplified = simplify(path.node)
			const name = cardData.name.en
			if (!name) return

			const card = cardsJSON.products.find((it) => {
				return it.name.startsWith(name) && it.idExpansion === setData.thirdParty.cardmarket
			})
			// console.log(json.products.find((it) => it.name.startsWith(name)))
			// console.log(name, card)

			set(j, simplified.item, j.objectExpression([
				j.property('init', j.identifier('cardmarket'), j.literal(card.idProduct))
			]), 'thirdParty')
		})
		.toSource({useTabs: true, lineTerminator: '\n'}).replace(/    /g, '	')
}

module.exports = transformer
module.exports.parser = 'ts'
