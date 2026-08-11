import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Manectric",
		'de-de': "Voltenso"
	},

	illustrator: "Mana Ibe",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [310],
	
	hp: 90,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Electrike"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Second Bite",
				'de-de': "Wunde Stelle"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swift",
				'de-de': "Sternschauer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'de-de': "Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		'en-us': "It discharges electricity from its mane. It creates a thundercloud overhead to drop lightning bolts."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87163,
				cardmarket: 278894
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278894,
				tcgplayer: 87163
			}
		},
	],

	retreat: 0
}

export default card
