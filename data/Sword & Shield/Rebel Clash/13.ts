import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi"
	},

	illustrator: "Kazuma Koda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi"
	},

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Soothing Scent",
				fr: "Senteur Apaisante"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
			},
			damage: 80,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Megaton Lariat",
				fr: "Lasso Titanesque"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 140,
	types: ["Grass"],
	regulationMark: "D"
}

export default card
