import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'de-de': "Togepi"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Charm",
				'fr-fr': "Charme",
				'de-de': "Charm"
			},
			effect: {
				'en-us': "If the Defending Pokémon attacks during your opponent's next turn, any damage it does is reduced by 10 (before applying Weakness and Resistance).",
				'fr-fr': "Si le Pokémon Défenseur attaque pendant le prochain tour de votre adversaire, tous les dégâts qu'il inflige sont réduits de 10 (avant application de la Faiblesse et de la Résistance).",
				'de-de': "If the Defending Pokémon attacks during your opponent's next turn, any damage it does is reduced by 10 (before applying Weakness and Resistance)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spike Ball Tackle",
				'fr-fr': "Charge balle pic",
				'de-de': "Spike Ball Tackle"
			},
			effect: {
				'en-us': "Togepi does 10 damage to itself.",
				'fr-fr': "Togepi s'inflige 10 dégâts.",
				'de-de': "Togepi does 10 damage to itself."
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its shell is said to contain happiness itself, which it will share with those who are kind to it.",
		'fr-fr': "On raconte que sa coquille est pleine de bonheur, qu'il partage avec tous ceux qui sont gentils avec lui."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274708,
				tcgplayer: 89930
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274708,
				tcgplayer: 89930
			}
		}
	]
}

export default card
