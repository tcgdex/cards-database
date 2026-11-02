import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Chimchar",
		de: "Panflam"
	},

	illustrator: "Kagemaru Himeno",
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
				de: "Glut"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Chimchar.",
				de: "Wirf 1 Münze. Bei „Zahl“ lege eine {R}-Energie, die an Panflam angelegt ist, auf deinen Ablagestapel."
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

	description: {
		en: "It agilely scales sheer cliffs to live atop craggy mountains. Its fire is put out when it sleeps.",
		de: "Es klettert behände steile Felsen hinauf, um auf Bergen zu leben. Sein Feuer ist aus, wenn es schläft."
	},

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278413,
				tcgplayer: 84287
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278413,
				tcgplayer: 84287
			}
		},
	],
}

export default card
