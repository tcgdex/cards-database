import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Drednaw",
		fr: "Torgamord"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Chewtle",
		fr: "Khélocrok"
	},

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vise Wave",
				fr: "Vague Étau"
			},
			effect: {
				en: "If you played Nessa from your hand during this turn, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Si vous avez joué Donna de votre main pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé."
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
