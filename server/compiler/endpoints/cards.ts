import { SupportedLanguages } from '../../../interfaces'
import { FileFunction } from '../compilerInterfaces'
import { cardToCardSingle, getCards } from '../utils/cardUtil'

const fn: FileFunction = async (lang: SupportedLanguages) => {
	const common = await getCards(lang)
	return await Promise.all(common.map((card) => cardToCardSingle(card[0], card[1], lang)))
}

export default fn
