import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Treecko",
		'de-de': "Geckarbor"
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [252],
	
	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Crush",
				'de-de': "Zerquetschender Schweif"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
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

	description: {
		'en-us': "The soles of its feet are covered by countless tiny spikes, enabling it to walk on walls and ceilings."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90041,
				cardmarket: 278950
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278950,
				tcgplayer: 90041
			}
		},
	],

}

export default card
