import { Transform } from "jscodeshift"
import cardsJSON from '../products_singles_6.json'
import pathUtils from 'path/posix'
import { extractFile } from './utils/ts-extract-utils'
import { Card, Set } from '../interfaces'
import { set, simplify } from "./utils/jscodeshift-utils"
import { cardTranslationsMap } from "./utils-data/jp_card_translations"

// Run this code like
// npx jscodeshift ./data-asia/SV/SV5a -t ./scripts/linkAsiaCardToCardmarket.ts --extensions=ts --parser=ts
// add --dry argument for testing
// need cardmarket singles datatable jsons in root

const OVERRIDE_EXISTING = false;

/**
 * Start editing here !
 */
const transformer: Transform = (file, api) => {
	const j = api.jscodeshift

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
			if (index !== 0 || !setData.thirdParty?.cardmarket) return
			const filename = pathUtils.basename(file.path, '.ts')
			let simplified = simplify(path.node)

			// skip if already has thirdParty.cardmarket and not overriding
			if (simplified.items.thirdParty?.item && !OVERRIDE_EXISTING) return

			const name = cardData.name.ja
			if (!name) return

			// remove VSTAR, VMAX, ex, etc from the end of name
			// TODO there is still more cases to catch
			// FIXME "ex" can catch "pokedex"
            const clean_name = name.replace(/(V-UNION|VSTAR|VMAX|PRO|ex|Ex|GX)$/g, '').trim();
            let translatedName = cardTranslationsMap.get(clean_name);

			if (!translatedName) {
				// TODO write to report instead
				console.warn(`No translation found for card name: ${clean_name}`);
				return;
			}
			if(name.endsWith('V-UNION')) {
				translatedName += ' V-UNION';
			} else if(name.endsWith('VSTAR')) {
				translatedName += ' VSTAR';
			} else if (name.endsWith('VMAX')) {
				translatedName += ' VMAX';
			} else if(name.endsWith('PRO')) {
				translatedName += ' Pro';
			} else if ((cardData.suffix === 'EX') || name.endsWith('Ex') || name.endsWith('ex')) {
				translatedName += ' EX';
			} else if(name.endsWith('GX')) {
				translatedName += ' GX';
			}

			// console.log("Looking for card:", translatedName, "in set:", setData.thirdParty.cardmarket);

			const card = cardsJSON.products.find((it) => {
				return it.name.toLowerCase().startsWith(translatedName.toLowerCase()) && it.idExpansion === setData.thirdParty!.cardmarket
			})
			// console.log(cardsJSON.products.find((it) => it.name.startsWith(translatedName)))
			// console.log(name, card)

			if(!card) {
				return
			}

			// console.log(translatedName, card.idProduct)

			const item = simplified.items.thirdParty?.item
			if (!item || item.type !== 'ObjectExpression') {
				set(j, simplified.item, j.objectExpression([
					j.property('init', j.identifier('cardmarket'), j.literal(card.idProduct))
				]), 'thirdParty', { override: true })
			} else {
				set(j, item, j.literal(card.idProduct), 'cardmarket', { override: true })
			}

		})
		.toSource({ useTabs: true, lineTerminator: '\n' }).replace(/    /g, '	')
}

module.exports = transformer
module.exports.parser = 'ts'
