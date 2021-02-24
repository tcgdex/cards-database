import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		72,
	],
	hp: 50,
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
				en: "Lost in the Waves",
				fr: "Porté Disparu",
			},
			effect: {
				en: "Return this Pokémon and all cards attached to it to your hand.",
				fr: "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
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
