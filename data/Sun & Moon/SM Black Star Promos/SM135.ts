import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Latias",
		fr: "Latias",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 110,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mist Ball",
				fr: "Ball’Brume",
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy and a Psychic Energy from this Pokémon.",
				fr: "Lancez une pièce. Si c’est pile, défaussez une Énergie Fire et une Énergie Psychic de ce Pokémon.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
