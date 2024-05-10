import { SupportedLanguages } from '../../../interfaces'
import { FileFunction } from '../compilerInterfaces'
import { cardToCardSingle, getCards } from '../utils/cardUtil'

const fn: FileFunction = async (lang: SupportedLanguages) => {
	const common = await getCards(lang)
	return await Promise.all(common.map((card) => cardToCardSingle(card[0], card[1], lang).catch((e) => {
		console.log('error compiling card', `${card[1].set.id}-${card[0]}`)
		throw e
	})))
}

export default fn
