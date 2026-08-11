import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Chimecho",
		'fr-fr': "Eoko",
		'de-de': "Palimpalim"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		358,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Collect"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Draw a card."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Warp Sounds",
				'fr-fr': "Fausses notes",
				'de-de': "Warp Sounds"
			},
			effect: {
				'en-us': "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué, il est maintenant Confus.",
				'de-de': "If the Defending Pokémon an Evolved Pokémon, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 84294,
		cardmarket: 276523
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84294,
				cardmarket: 276523
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84294,
				cardmarket: 276523
			},
		}
	],
}

export default card
