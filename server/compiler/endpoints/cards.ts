import { SupportedLanguages } from '../../../interfaces'
import { DataTree, FileFunction } from '../compilerInterfaces'
import { cardToCardSingle, getCards } from '../utils/cardUtil'

const fn: FileFunction = async (lang: SupportedLanguages, data: DataTree) => {
	const common = await getCards(lang)
	return await Promise.all(common.map((card) => cardToCardSingle(card[0], card[1], lang)))
}

export default fn

// series/sets/cards inputs -> intermediate -> series/sets/cards output
