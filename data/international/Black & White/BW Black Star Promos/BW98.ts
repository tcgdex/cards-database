import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mew",
		'fr-fr': "Mew",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Psyscan",
				'fr-fr': "Psychoscan",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may have your opponent reveal his or her hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez demander à votre adversaire de montrer sa main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic Exchange",
				'fr-fr': "Échange Psychique",
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 6 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.",
	},
}

export default card
