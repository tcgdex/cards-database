import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Elekid",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		239,
	],
	hp: 30,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Kick",
			},
			effect: {
				en: "Flip a coin. If heads, choose an Energy card attached to the Defending Pokémon. Your opponent moves that card to 1 of his or her other Pokémon. (If your opponent has no Benched Pokémon, this attack does nothing.)",
			},

		},
	],






}

export default card
