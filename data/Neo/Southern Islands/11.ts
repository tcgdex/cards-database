import { Card } from '../../../interfaces'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		en: "Marill",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		183,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "This Pokémon's fur repels water like a duck's feathers, allowing it to stay dry and fluffy even in water.",
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275641,
				tcgplayer: 46468
			}
		}
	]
}

export default card
