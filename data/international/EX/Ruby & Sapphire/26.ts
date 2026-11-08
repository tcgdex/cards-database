import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys",
		'de-de': "Panekon"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [268],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Hard Cocoon",
				'fr-fr': "Carapace",
				'de-de': "Hard Cocoon"
			},
			effect: {
				'en-us': "During your opponent's turn, if Cascoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30.",
				'fr-fr': "Pendant le tour de votre adversaire, si l'une de ses attaques inflige des dégâts à Blindalys (après application de la Faiblesse et de la Résistance), lancez une pièce. Si c'est face, réduisez ces dégâts de 30.",
				'de-de': "During your opponent's turn, if Cascoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Thread",
				'fr-fr': "Fil empoisonné",
				'de-de': "Poison Thread"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275674,
				tcgplayer: 84119
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275674,
				tcgplayer: 84119
			}
		},
	],

}

export default card
