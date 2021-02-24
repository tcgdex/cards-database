import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		61,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwag",
		fr: "Ptitard",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
				fr: "Écume",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knuckle Punch",
				fr: "Coud’Phalange",
			},

			damage: 40,

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
