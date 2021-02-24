import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Shuckle",
		fr: "Caratroc",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		213,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fresh Squeezed",
				fr: "Fraîchement Pressé",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 3 basic Energy cards and discard them. Then, shuffle your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher jusqu’à 3 cartes Énergie de base dans votre deck et les défausser. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Energy Drink",
				fr: "Boisson Énergisante",
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to your Pokémon in any way you like.",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
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
