import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Yveltal",
		fr: "Yveltal",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		717,
	],
	hp: 120,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strafe",
				fr: "Bombarder",
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Oblivion Wing",
				fr: "Mort-Ailes",
			},
			effect: {
				en: "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie Darkness de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
			damage: 90,

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
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
