import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflèmit",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		289,
	],
	hp: 180,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pitch",
				fr: "Lancer",
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
