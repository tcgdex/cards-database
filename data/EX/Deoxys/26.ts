import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure",
		de: "Panzaeron"
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
				en: "Metallic Lift",
				fr: "Élévation métallique",
				de: "Metallic Lift"
			},
			effect: {
				en: "If Skarmory has any Metal Energy attached to it, the Retreat Cost for Skarmory is 0.",
				fr: "Si Airmure possède une Énergie , son Coût de retraite est de 0.",
				de: "If Skarmory has nay  Energy attached to it, the Retreat Cost for Skarmory is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spearhead",
				fr: "Meneur",
				de: "Spearhead"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				de: "Draw a card."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Metal",
				fr: "Heavy Métal",
				de: "Heavy Metal"
			},
			effect: {
				en: "Flip a coin for each Metal Energy attached to Skarmory. This attack does 10 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie  attachée à Airmure. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires multipliés par le nombre de faces.",
				de: "Flip a coin for each  Energy attached to Skarmory. This attack does 10 damage plus 20 more danage for each heads."
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

	thirdParty: {
		tcgplayer: 89238,
		cardmarket: 276429
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
