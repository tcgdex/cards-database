import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Cœur Mémoire",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Géodestruction",
			},
			damage: "350",
			effect: {
				fr: "Défaussez toutes les Énergies de ce Pokémon.",
			},
		},
	],
	regulationMark: "J",
	illustrator: "Toyste Beach",

	thirdParty: {
		cardmarket: 877486
	}
}

export default card
