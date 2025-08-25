import { Transform } from "jscodeshift"
import pathUtils from 'path/posix'
import type { Card as DBCard, Set as DBSet } from '../interfaces'
import { extractFile } from './utils/ts-extract-utils'
import fs from 'node:fs/promises'
import { set, simplify } from "./utils/jscodeshift-utils"

export interface Root {
	totalItems: number
	success: boolean
	errors: any[]
	results: Result[]
}

export interface Result {
	productId: number
	name: string
	cleanName: string
	imageUrl: string
	categoryId: number
	groupId: number
	url: string
	modifiedOn: string
	imageCount: number
	presaleInfo: PresaleInfo
	extendedData: ExtendedDaum[]
}

export interface PresaleInfo {
	isPresale: boolean
	releasedOn: any
	note: any
}

export interface ExtendedDaum {
	name: string
	displayName: string
	value: string
}


/**
 * Start editing here !
 */
const transformer: Transform = async (file, api) => {
	const j = api.jscodeshift
	const root = j(file.source)

	const cardData: Omit<DBCard, 'set'> = extractFile(file.path)

	const setName = root.find(j.ImportDeclaration).filter((path) => {
		const source = path.node.source.value! as string
		return source.startsWith('../') && !source.startsWith('../../')
	}).get('source').value.value
	const setPath = pathUtils.resolve(file.path, '../', setName)
	const setData: Omit<DBSet, 'serie'> = extractFile(setPath + '.ts')

	if (!setData.thirdParty?.tcgplayer) {
		return
	}

	const productsBaseFolder = 'var/models/tcgplayer/products'

	const productsFolder = pathUtils.resolve(__filename, '../../', productsBaseFolder)

	const products: Root = await fs.readFile(`${productsFolder}/${setData.thirdParty.tcgplayer}.json`, 'utf8')
		.then((it) => JSON.parse(it))

	return root
		.find(j.ObjectExpression)
		.forEach((path, index) => {
			if (index !== 0) return
			const filename = pathUtils.basename(file.path, '.ts')
			let simplified = simplify(path.node)
			const name = cardData.name.en
			if (!name) return

			const expansion = products.results.find((it) => {


				return it.name.startsWith(name)
					&& it.extendedData.find((it) => it.name === 'Number')?.value?.includes(`${filename}/`)
			})
				?.productId
			if (!expansion) {
				return
			}

			const item = simplified.items.thirdParty?.item
			if (!item || item.type !== 'ObjectExpression') {
				set(j, simplified.item, j.objectExpression([
					j.property('init', j.identifier('tcgplayer'), j.literal(expansion))
				]), 'thirdParty', { override: true })
			} else {
				set(j, item, j.literal(expansion), 'tcgplayer', { override: true })
			}
		})
		.toSource({ useTabs: true, lineTerminator: '\n' }).replace(/    /g, '	')
}

module.exports = transformer
module.exports.parser = 'ts'
