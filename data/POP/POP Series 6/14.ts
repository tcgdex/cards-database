import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Chimchar"
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
				fr: "Griffe"
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
				fr: "Flammèche"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Chimchar.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie  attachée à Ouisticram."
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
		en: "It agilely scales cliffs to live atop craggy mountains. Its fire is put out when it sleeps."
	},

	retreat: 1,

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 277899,
		tcgplayer: 84283
	}
}

export default card
