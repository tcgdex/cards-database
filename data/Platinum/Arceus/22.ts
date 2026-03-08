import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Manectric",
		de: "Voltenso"
	},

	illustrator: "Mana Ibe",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],
	
	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electrike",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Second Bite",
				de: "Wunde Stelle"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
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
				en: "Swift",
				de: "Sternschauer"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				de: "Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
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

	thirdParty: {
		cardmarket: 278894,
		tcgplayer: 87163
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
