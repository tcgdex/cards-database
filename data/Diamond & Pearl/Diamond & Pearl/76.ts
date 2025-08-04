import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		de: "Panflam"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		390,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				de: "Glut"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Chimchar.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Ouisticram.",
				de: "Wirf 1 Münze. Bei 'Zahl' lege eine -Energie, die an Panflam angelegt ist, auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il escalade prestement les falaises escarpées et vit sur les sommets. Sa flamme s'éteint quand il dort."
	},

	thirdParty: {
		cardmarket: 277575,
		tcgplayer: 84282
	}
}

export default card
