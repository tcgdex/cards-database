import { SupportedLanguages } from '../../../interfaces'
import { FileFunction } from '../compilerInterfaces'
import { cardToCardSingle, getCards } from '../utils/cardUtil'

// Cache to track Trainer card names and their legality status
interface TrainerLegalityCache {
	[cardName: string]: {
		standard: boolean
		expanded: boolean
	}
}

const fn: FileFunction = async (lang: SupportedLanguages) => {
	const common = await getCards(lang)
	const trainerCache: TrainerLegalityCache = {}
	
	// Separate cards into Trainers and non-Trainers
	const trainerCards: Array<[string, typeof common[0][1]]> = []
	const otherCards: Array<[string, typeof common[0][1]]> = []
	
	for (const [localId, card] of common) {
		if (card.category === 'Trainer') {
			trainerCards.push([localId, card])
		} else {
			otherCards.push([localId, card])
		}
	}
	
	console.log(`[DEBUG] Total cards: ${common.length}, Trainers: ${trainerCards.length}, Others: ${otherCards.length}`)
	if (trainerCards.length > 0) {
		console.log(`[DEBUG] First trainer card: ${trainerCards[0][1].name.en} (${trainerCards[0][1].set.id})`)
	}
	
	// Process Trainer cards sequentially to build the cache
	const trainerResults = []
	for (const [localId, card] of trainerCards) {
		try {
			const compiledCard = await cardToCardSingle(localId, card, lang, trainerCache)
			trainerResults.push(compiledCard)
			
			// Update cache for Trainer cards using English name as key
			const cardNameEn = card.name.en
			if (cardNameEn) {
				trainerCache[cardNameEn] = {
					standard: compiledCard.legal.standard,
					expanded: compiledCard.legal.expanded
				}
				if (trainerResults.length < 5) {
					console.log(`[DEBUG] Cached trainer: ${cardNameEn} - standard: ${compiledCard.legal.standard}, expanded: ${compiledCard.legal.expanded}`)
				}
			}
		} catch (e) {
			console.error('error compiling card', `${card.set.id}-${localId}`, e)
			throw e
		}
	}
	
	// Process other cards in parallel (they don't need the cache)
	const otherResults = await Promise.all(
		otherCards.map(([localId, card]) => 
			cardToCardSingle(localId, card, lang).catch((e) => {
				console.error('error compiling card', `${card.set.id}-${localId}`, e)
				throw e
			})
		)
	)
	
	const allResults = new Map<string, typeof trainerResults[0]>()
	
	// Add trainer results
	for (const result of trainerResults) {
		allResults.set(result.id, result)
	}
	
	// Add other results
	for (const result of otherResults) {
		allResults.set(result.id, result)
	}
	
	const results = common.map(([localId, card]) => {
		const cardId = `${card.set.id}-${localId}`
		const result = allResults.get(cardId)
		if (!result) {
			throw new Error(`Missing compiled card: ${cardId}`)
		}
		return result
	})
	
	return results.sort((a, b) => {
		const dateA = typeof a.set.releaseDate === 'object' 
			? Object.values(a.set.releaseDate)[0] 
			: a.set.releaseDate
		const dateB = typeof b.set.releaseDate === 'object' 
			? Object.values(b.set.releaseDate)[0] 
			: b.set.releaseDate
		return dateA > dateB ? 1 : -1
	})
}

export default fn
