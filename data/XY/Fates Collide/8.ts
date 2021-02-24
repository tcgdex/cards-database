import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Deerling",
		fr: "Vivaldaim",
	},
	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		585,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Find a Friend",
				fr: "Trouver un Ami",
			},
			effect: {
				en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
