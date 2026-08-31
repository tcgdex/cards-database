import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		281,
	],
	hp: 80,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
		de: "Trasla"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Smack",
				fr: "Claque",
				de: "Klatscher"
			},

			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
				de: "Magischer Schuss"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		en: "The cheerful spirit of its Trainer gives it energy for its psychokinetic power. It spins and dances when happy.",
		de: "Die fröhliche Stimmung seines Trainers verleiht ihm Energie für psychokinetische Kraft. Wenn es glücklich ist, tanzt und dreht es sich."
	},
}

export default card
