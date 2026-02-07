import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Unown",
		fr: "Zarbi",
		de: "Icognito"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "CURE",
				fr: "GUÉRISON",
				de: "CURE"
			},
			effect: {
				en: "Once during your turn, when you put Unown from your hand onto your Bench, remove all Special Conditions from your Active Pokémon.",
				fr: "Une seule fois pendant votre tour, lorsque vous placez Zarbi de votre main sur votre Banc, retirez tous les États Spéciaux à votre Pokémon Actif.",
				de: "Einmal während deines Zuges kannst du, wenn du Icognito von deiner Hand auf deine Bank legst, alle Speziellen Zustände von deinem Aktiven Pokémon entfernen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its flat, thin body is always stuck on walls. Its shape appears to have some meaning."
	},

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'reverse', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 279581,
		tcgplayer: 90165
	}
}

export default card
