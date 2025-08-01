import { Transform } from "jscodeshift"
import cardsJSON from '../products_singles_6.json'
import pathUtils from 'path/posix'
import { extractFile } from './utils/ts-extract-utils'
import { Card, Set } from '../interfaces'
import { set, simplify } from "./utils/jscodeshift-utils"

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
		.toSource({ useTabs: true, lineTerminator: '\n' }).replace(/    /g, '	')
}

module.exports = transformer
module.exports.parser = 'ts'
