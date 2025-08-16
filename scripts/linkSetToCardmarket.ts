import { Transform } from "jscodeshift"
import expansionsJSON from '../products_nonsingles_6.json'
import pathUtils from 'path/posix'
import { set, simplify } from "./utils/jscodeshift-utils"

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
			const name = simplified.items.name.items.en?.item?.value
			if (!name) return

			// console.log(setName)

			const expansion = expansionsJSON.products.find((it) => it.name.startsWith(name))
				?.idExpansion
			if (!expansion) {
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
