import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Unown",
		fr: "Zarbi",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
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
				en: "HAND",
				fr: "MAIN",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, and if you have 35 or more cards in your hand, you may use this Ability. If you do, you win this game.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, et si vous avez 35 cartes ou plus dans votre main, vous pouvez utiliser ce talent. Dans ce cas, vous remportez la partie.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance Cachée",
			},

			damage: 10,

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
