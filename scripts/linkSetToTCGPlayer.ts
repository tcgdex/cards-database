import { Transform } from "jscodeshift"
import expansionsJSON from '../var/models/tcgplayer/groups.json'
import pathUtils from 'path/posix'
import type { Set as DBSet } from '../interfaces'
import { extractFile } from './utils/ts-extract-utils'
import { set, simplify } from "./utils/jscodeshift-utils"

/**
 * Start editing here !
 */
const transformer: Transform = (file, api) => {
	const j = api.jscodeshift
	const setData: Omit<DBSet, 'serie'> = extractFile(file.path)

	const root = j(file.source)
	return root
		.find(j.ObjectExpression)
		.forEach((path, index) => {
			if (index !== 0) return
			const filename = pathUtils.basename(file.path, '.ts')
			let simplified = simplify(path.node)
			const name = setData.name.en
			if (!name) return

			// console.log(setName)

			const expansion = expansionsJSON.results.find((it) => it.name.startsWith(name))
				?.groupId
			if (!expansion) {
				return
			}

			const item = simplified.items.thirdParty.item
			if (item.type !== 'ObjectExpression') {
				set(j, simplified.item, j.objectExpression([
					j.property('init', j.identifier('tcgplayer'), j.literal(expansion))
				]), 'thirdParty')
			} else {
				set(j, item, j.literal(expansion), 'tcgplayer')
			}
		})
		.toSource({ useTabs: true, lineTerminator: '\n' }).replace(/    /g, '	')
}

module.exports = transformer
module.exports.parser = 'ts'
