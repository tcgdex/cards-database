import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Aegislash-EX",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		681,
	],
	hp: 170,
	types: [
		"Metal",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mighty Shield",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from each of your opponent's Pokémon that has Special Energy attached to it.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash Blast",
			},
			effect: {
				en: "This attack does 20 more damage for each Metal Energy attached to this Pokémon.",
			},
			damage: 40,

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
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
