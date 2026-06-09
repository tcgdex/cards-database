import { Transform } from "jscodeshift"
import expansionsJSON from '../products_nonsingles_6.json'
import pathUtils from 'path/posix'
import { set, simplify } from "./utils/jscodeshift-utils"
import { cmExpansionMap } from "./utils-data/cm_expansions"
import { jpSetTranslationsMap } from "./utils-data/jp_set_translations"

// Run this code like
// npx jscodeshift ./data-asia/*/*.ts -t ./scripts/linkAsiaSetToCardmarket.ts --extensions=ts --parser=ts
// add --dry argument for testing
// need cardmarket nonsingles datatable jsons in root

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
			const filename = pathUtils.basename(file.path, '.ts')
			let simplified = simplify(path.node)
			const name = simplified.items.name.items.ja?.item?.value
			if (!name) return

			// get translated name when available
			const id = simplified.items.id.item.value
			const translatedName = jpSetTranslationsMap.get(id);
			if(!translatedName) {
				// console.warn(`No translation found for set ${name} (${id})`)
				return
			}

			const expansion = cmExpansionMap.get(name)
				?? expansionsJSON.products.find((it) => it.name.startsWith(name))
					?.idExpansion

			if (!expansion) {
				return
			}

			//check for existing cardmarket property and compare value
			const existing = simplified.items.thirdParty?.item?.properties.find((prop: any) => prop.key.name === 'cardmarket')
			if (existing && existing.value.value !== expansion) {
				console.warn(`Cardmarket expansion mismatch for set ${name}: existing=${existing.value.value} new=${expansion}`)
				return
			}

			set(j, simplified.item, j.objectExpression([
				j.property('init', j.identifier('cardmarket'), j.literal(expansion))
			]), 'thirdParty')
		})
		.toSource({ useTabs: true, lineTerminator: '\n' }).replace(/    /g, '	')
}

module.exports = transformer
module.exports.parser = 'ts'
