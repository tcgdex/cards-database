import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Larvesta",
		fr: "Pyronille",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		636,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
