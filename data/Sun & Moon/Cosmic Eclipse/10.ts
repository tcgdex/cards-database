import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Lileep",
		fr: "Lilia",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		345,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
