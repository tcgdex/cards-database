import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Leafeon",
		fr: "Phyllali",
		de: "Folipurba"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		470,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale épuisante",
				de: "Spiralsauger"
			},
			effect: {
				en: "Remove 1 damage counter from Leafeon.",
				fr: "Retirez à Phyllali 1 marqueur de dégât.",
				de: "Entferne 1 Schadenmarke von Folipurba."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Blade",
				fr: "Lame-feuille",
				de: "Laubklinge"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278056,
		tcgplayer: 86678
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["platinum"]
		},
		{
			type: "holo",
			foil: "cosmos"
		}
	]
}

export default card
