import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali",
		'de-de': "Folipurba"
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
		'en-us': "Eevee",
		'fr-fr': "Evoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale épuisante",
				'de-de': "Spiralsauger"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Leafeon.",
				'fr-fr': "Retirez à Phyllali 1 marqueur de dégât.",
				'de-de': "Entferne 1 Schadenmarke von Folipurba."
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
				'en-us': "Leaf Blade",
				'fr-fr': "Lame-feuille",
				'de-de': "Laubklinge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
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

	description: {
		'en-us': "Just like a plant, it uses photosynthesis. As a result, it is always enveloped in clear air.",
	},

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
