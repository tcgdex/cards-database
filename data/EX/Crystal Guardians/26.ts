import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Pelipper δ",
		fr: "Bekipan δ"
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
				fr: "Transport Delta"
			},
			effect: {
				en: "Once during your turn (before your attack), if Pelipper is on your Bench, you may switch 1 of your Active Pokémon that has δ on its card with 1 of your Benched Pokémon.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Bekipan se trouve sur votre Banc, vous pouvez échanger 1 de vos Pokémon Actifs possédant le symbole δ avec 1 des Pokémon de votre Banc."
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
				fr: "Ultrason"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus."
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
				fr: "Cru-aile"
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
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
