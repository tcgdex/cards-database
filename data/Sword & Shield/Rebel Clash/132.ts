import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Durant",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gathering Food",
			},
			effect: {
				en: "For each Energy attached to this Pokémon, search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
