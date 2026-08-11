import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Abra",
		'fr-fr': "Abra",
		'de-de': "Abra"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		63,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Vanish",
				'fr-fr': "Disparition",
				'de-de': "Vanish"
			},
			effect: {
				'en-us': "Shuffle Abra into your deck. (Discard all cards attached to Abra.)",
				'fr-fr': "Mélangez Abra avec votre deck. (Défaussez toutes les cartes attachées à Abra.)",
				'de-de': "Shuffle Abra into your deck. (Discard all cards attached to Abra.)"
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc psychique",
				'de-de': "Psyshock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paraylzed."
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
		'en-us': "It teleports itself away from danger, making it difficult to capture.",
		'fr-fr': "Il se téléporte hors du danger, rendant sa capture difficile."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274102,
				tcgplayer: 83445
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274102,
				tcgplayer: 83445
			}
		}
	]
}

export default card
