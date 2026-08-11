import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		447,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Kick",
				'fr-fr': "Koud’Pied",
				'es-es': "Patada",
				'it-it': "Calcio",
				'pt-br': "Chute",
				'de-de': "Tritt"
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

	description: {
		'en-us': "It knows how people and Pokémon feel by looking at their auras. It doesn't approach dangerous opponents.",
	},

	thirdParty: {
		cardmarket: 388372,
		tcgplayer: 195069
	}
}

export default card
