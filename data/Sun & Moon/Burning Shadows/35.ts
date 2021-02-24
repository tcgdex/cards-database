import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill",
	},
	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		184,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marill",
		fr: "Marill",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Thick Fat",
				fr: "Isograisse",
			},
			effect: {
				en: "This Pokémon takes 30 less damage from the attacks of your opponent's Fire or Water Pokémon (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques des Pokémon Fire ou Water de votre adversaire (après application de la Faiblesse et de la Résistance).",
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

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
