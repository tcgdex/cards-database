import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
		'de-de': "Chelcarain"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [388],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch’herbe",
				'de-de': "Rasierblatt"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sleep Powder",
				'fr-fr': "Poudre dodo",
				'de-de': "Schlafpuder"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A Grotle that lives in the forest is said to have its own secret springwater."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85919,
				cardmarket: 279187
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85919,
				cardmarket: 279187
			}
		},
	],

}

export default card
