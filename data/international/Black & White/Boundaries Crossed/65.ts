import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'pt-br': "Croagunk",
		'de-de': "Glibunkel"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		453,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poison Jab",
				'fr-fr': "Direct Toxik",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
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
		'en-us': "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
	},

	thirdParty: {
		cardmarket: 280651,
		tcgplayer: 84480
	}
}

export default card
