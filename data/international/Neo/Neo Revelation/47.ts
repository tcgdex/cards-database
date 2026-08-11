import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'de-de': "Paras"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		46,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Spore",
				'fr-fr': "Spore dodo",
				'de-de': "Schlafsporen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' schläft das verteidigende Pokémon jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is doused with mushroom spores when it is born. As its body grows, mushrooms sprout from its back.",
		'fr-fr': "Il est recouvert de spores de champignons à sa naissance. Quand il grandit, des champignons lui poussent sur le dos."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274633,
				tcgplayer: 87947
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274633,
				tcgplayer: 87947
			}
		}
	]
}

export default card

