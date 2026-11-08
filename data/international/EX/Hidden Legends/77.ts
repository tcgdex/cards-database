import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
		'de-de': "Tentacha"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [72],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Freefloating",
				'fr-fr': "Apesanteur",
				'de-de': "Freefloating"
			},
			effect: {
				'en-us': "If Tentacool has no Energy attached to it, Tentacool's Retreat Cost is 0.",
				'fr-fr': "Si Tentacool ne possède pas d'Énergies, son Coût de Retraite est de 0.",
				'de-de': "If Tentacool has no Energy attached to it, Tentacool's Retreat Cost is 0."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Wrap",
				'fr-fr': "Ligotage",
				'de-de': "Wrap"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89866,
				cardmarket: 276151
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89866,
				cardmarket: 276151
			}
		},
	]
}

export default card
