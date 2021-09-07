import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		148,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Search and Invite",
				fr: "Rechercher et inviter",
			},
			effect: {
				en: "Search your deck for up to 2 Pokémon, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 Pokémon dans votre deck, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "40×",

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
