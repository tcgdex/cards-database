import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Grace",
				fr: "Prodige d'Énergie",
			},
			effect: {
				en: "Once during your turn (before your attack), you may Knock Out this Pokémon. If you do, attach 3 basic Energy cards from your discard pile to 1 of your Pokémon (excluding Pokémon-EX).",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mettre ce Pokémon K.O. Dans ce cas, attachez 3 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon (excepté les Pokémon-EX).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
