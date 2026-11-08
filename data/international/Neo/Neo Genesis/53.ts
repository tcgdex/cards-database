import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'de-de': "Endivie"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		152,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Deflector",
				'fr-fr': "Protection",
				'de-de': "Deflector"
			},
			effect: {
				'en-us': "During your opponent's next turn, whenever Chikorita takes damage, divide that damage in half (rounded down to the nearest 10). (Any other effects still happen.)",
				'fr-fr': "Pendant le prochain tour de votre adversaire, à chaque fois que Germignon reçoit des dégâts, divisez ces dégâts par deux (arrondis à la dizaine la plus proche). (Tout autre effet reste actif.)",
				'de-de': "During your opponent's next turn, whenever Chikorita takes damage, divide that damage in half (rounded down to the nearest 10). (Any other effects still happen.)"
			},

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
		'en-us': "A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up the sun's rays.",
		'fr-fr': "Un doux parfum s'élève des feuilles du sommet de sa tête. Il est doux et adore absorber les rayons du soleil."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274453,
				tcgplayer: 84272
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274453,
				tcgplayer: 84272
			}
		}
	]
}

export default card
