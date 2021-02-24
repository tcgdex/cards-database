import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Pelipper δ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		279,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Wingull",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Transport",
			},
			effect: {
				en: "Once during your turn (before your attack), if Pelipper is on your Bench, you may switch 1 of your Active Pokémon that has δ on its card with 1 of your Benched Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Supersonic",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
