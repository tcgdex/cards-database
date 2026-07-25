import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Golem",
		de: "Geowaz"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [76],
	
	hp: 140,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Graveler"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Lunge Out",
				de: "Sprungangriff"
			},

			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tumble Down",
				de: "Hinabstürzen"
			},
			effect: {
				en: "Discard as many Fighting Energy cards as you like from your hand. The attack does 30 damage times the number of Fighting Energy cards you discarded.",
				de: "Lege beliebig viele -Energiekarten von deiner Hand auf den Ablagestapel. Dieser Angriff fügt für jede auf dieser Weise auf den Ablagestapel gelegte -Energiekarte 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
				de: "Rollende Felsen"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85829,
				cardmarket: 278891
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278891,
				tcgplayer: 85829
			}
		},
	],

}

export default card
