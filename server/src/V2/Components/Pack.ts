import eeveePack from '../../../generated/vee-vee-eevee-pack.json'
import type { PocketLanguage } from '../../util'
import { getCompiledCard, toBrief } from './Card'

const packs = [eeveePack]

function summarizePack(pack: typeof eeveePack, lang: PocketLanguage) {
	return {
		id: pack.id,
		gameId: pack.gameId,
		releaseDate: pack.releaseDate,
		name: pack.names[lang],
		image: pack.image,
		cardCount: pack.slots.reduce((count, slot) => count + slot.cardIds.length, 0),
		cardsPerPack: pack.slots.reduce((count, slot) => count + slot.positions.length, 0),
	}
}

export function getEventPacks(lang: PocketLanguage) {
	return packs.map((pack) => summarizePack(pack, lang))
}

export function getEventPack(lang: PocketLanguage, id: string) {
	const pack = packs.find((item) => item.id === id || item.gameId === id)
	if (!pack) return undefined

	const cards = pack.slots.flatMap((slot) => slot.cardIds.map((cardId) => {
		const card = getCompiledCard(lang, cardId)
		if (!card) throw new Error(`Pack ${pack.id} references missing ${lang} card ${cardId}`)
		return toBrief(card)
	}))
	return { ...summarizePack(pack, lang), slots: pack.slots, cards }
}
