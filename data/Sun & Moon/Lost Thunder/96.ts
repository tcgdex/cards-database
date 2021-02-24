import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Hunt",
				fr: "Chasse Express",
			},
			effect: {
				en: "If you go first, you can use this attack on your first turn. Search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour. Cherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Cursed Drop",
				fr: "Chute Maudite",
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
			},

		},
	],


	retreat: 1,



}

export default card
