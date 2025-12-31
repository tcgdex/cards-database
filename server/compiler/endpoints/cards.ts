import { SupportedLanguages } from '../../../interfaces'
import { FileFunction } from '../compilerInterfaces'
import { cardToCardSingle, enhanceTrainerLegality, getCards } from '../utils/cardUtil'

const fn: FileFunction = async (lang: SupportedLanguages) => {
	const common = await getCards(lang)
	const compiledCards = await Promise.all(common.map((card) => cardToCardSingle(card[0], card[1], lang).catch((e) => {
		console.error('error compiling card', `${card[1].set.id}-${card[0]}`, e)
		throw e
	})))
	return enhanceTrainerLegality(compiledCards, common)
}

export default fn
