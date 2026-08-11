import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys",
		'de-de': "Schaloko"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [266],

	hp: 60,

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
				'en-us': "During your opponent's turn, if Silcoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30.",
				'fr-fr': "Pendant le tour de votre adversaire, si l'une de ses attaques inflige des dégâts à Almurys (après application de la Faiblesse et de la Résistance), lancez une pièce. Si c'est face, réduisez ces dégâts de 30.",
				'de-de': "During your opponent's turn, if Silcoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Gooey Thread",
				'fr-fr': "Fil gluant",
				'de-de': "Gooey Thread"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite tant que le prochain tour de votre adversaire n'est pas terminé.",
				'de-de': "The Defending Pokémon can't retreat until the end of your opponent's next turn."
			},
			damage: 10,

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
				cardmarket: 275691,
				tcgplayer: 89210
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275691,
				tcgplayer: 89210
			}
		},
	],

}

export default card
