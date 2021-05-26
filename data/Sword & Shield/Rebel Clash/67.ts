import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Boltund V",
	},
	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electrify",
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Bolt Storm",
			},
			effect: {
				en: "This attack does 30 more damage for each Lightning Energy attached to all of your Pokémon.",
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
