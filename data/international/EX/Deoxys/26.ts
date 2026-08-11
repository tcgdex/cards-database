import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'de-de': "Panzaeron"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Metallic Lift",
				'fr-fr': "Élévation métallique",
				'de-de': "Metallic Lift"
			},
			effect: {
				'en-us': "If Skarmory has any Metal Energy attached to it, the Retreat Cost for Skarmory is 0.",
				'fr-fr': "Si Airmure possède une Énergie , son Coût de retraite est de 0.",
				'de-de': "If Skarmory has nay  Energy attached to it, the Retreat Cost for Skarmory is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spearhead",
				'fr-fr': "Meneur",
				'de-de': "Spearhead"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Draw a card."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Metal",
				'fr-fr': "Heavy Métal",
				'de-de': "Heavy Metal"
			},
			effect: {
				'en-us': "Flip a coin for each Metal Energy attached to Skarmory. This attack does 10 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie  attachée à Airmure. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires multipliés par le nombre de faces.",
				'de-de': "Flip a coin for each  Energy attached to Skarmory. This attack does 10 damage plus 20 more danage for each heads."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89238,
				cardmarket: 276429
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89238,
				cardmarket: 276429
			},
		},
	],

}

export default card
