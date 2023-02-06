import { SupportedLanguages } from '../../../meta/definitions/database'
import { FileFunction } from '../compilerInterfaces'
import { cardToCardSingle, getCards, getLocalId } from '../utils/cardUtil'
import { FileListCard, loadDatabase } from '../utils/util'

const fn: FileFunction = async (lang: SupportedLanguages) => {
	return await getCards(lang)
		.then((cards) => Promise.all(
			cards.map((it) => cardToCardSingle(it[0], it[1], lang))))
}

export default fn

// series/sets/cards inputs -> intermediate -> series/sets/cards output
