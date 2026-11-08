import { Card } from 'models/database/card'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		'en-us': "Chimchar",
		'fr-fr': "Chimchar"
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
				'en-us': "Scratch",
				'fr-fr': "Griffe"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche"
			},
			effect: {
				'en-us': "Flip a coin. If heads discard a Fire Energy attached to Chimchar.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie  attachée à Ouisticram."
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
		'en-us': "It agilely scales cliffs to live atop craggy mountains. Its fire is put out when it sleeps."
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
