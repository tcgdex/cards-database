import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Smoochum",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		238,
	],
	hp: 30,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Kiss",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards on the Defending Pokémon. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
	],






}

export default card
