import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Chimchar",
		de: "Panflam"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [390],

	hp: 50,

	types: [
		"Fire"
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
				en: "Flip a coin. If heads discard a Fire Energy attached to Chimchar.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie  attachée à Ouisticram.",
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
		en: "It agilely scales cliffs to live atop craggy mountains. Its fire is put out when it sleeps.",
		de: "Es klettert behände steile Felsen hinauf, um auf Bergen zu leben. Sein Feuer ist aus, wenn es schläft."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84283,
				cardmarket: 277899
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84283,
				cardmarket: 277899
			},
		},
	],

}

export default card
