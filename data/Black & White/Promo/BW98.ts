import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
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
				en: "Psyscan",
				fr: "Psychoscan",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may have your opponent reveal his or her hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez demander à votre adversaire de montrer sa main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Exchange",
				fr: "Échange Psychique",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 6 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
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



}

export default card
