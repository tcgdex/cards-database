import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Marill",
		'fr-fr': "Marill",
		'de-de': "Marill"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		183,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Defense Curl",
				'fr-fr': "Boul'armure",
				'de-de': "Defense Curl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Marill during your opponent's next turn. (Any other effects of attacks still happen.)",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Marill pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				'de-de': "Flip a coin. If heads, prevent all damage done to Marill during your opponent's next turn. (Any other effects of attacks still happen.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Bubble Bomb",
				'fr-fr': "Bulle bombe",
				'de-de': "Bubble Bomb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, Marill does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, Marill s'inflige 10 dégâts.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, Marill does 10 damage to itself."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "The end of its tail serves as a buoy that keeps it from drowning, even in a vicious current.",
		'fr-fr': "L'extrémité de sa queue lui sert de bouée et lui évite de couler, même dans les courants les plus sournois."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274466,
				tcgplayer: 87213
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274466,
				tcgplayer: 87213
			}
		}
	]
}

export default card
