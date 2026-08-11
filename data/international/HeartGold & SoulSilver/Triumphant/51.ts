import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Unown",
		'fr-fr': "Zarbi",
		'de-de': "Icognito"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [201],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "CURE",
				'fr-fr': "GUÉRISON",
				'de-de': "CURE"
			},
			effect: {
				'en-us': "Once during your turn, when you put Unown from your hand onto your Bench, remove all Special Conditions from your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour, lorsque vous placez Zarbi de votre main sur votre Banc, retirez tous les États Spéciaux à votre Pokémon Actif.",
				'de-de': "Einmal während deines Zuges kannst du, wenn du Icognito von deiner Hand auf deine Bank legst, alle Speziellen Zustände von deinem Aktiven Pokémon entfernen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
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
		'en-us': "Its flat, thin body is always stuck on walls. Its shape appears to have some meaning."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90165,
				cardmarket: 279581
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279581,
				tcgplayer: 90165
			}
		},
	],

}

export default card
