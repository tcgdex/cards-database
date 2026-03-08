import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Treecko",
		de: "Geckarbor"
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		252,
	],
	
	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Crush",
				de: "Zerquetschender Schweif"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
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
		cardmarket: 278950,
		tcgplayer: 90041
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
