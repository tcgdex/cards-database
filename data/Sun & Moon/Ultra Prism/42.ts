import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		490,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Deep Currents",
				fr: "Courants Profonds",
			},
			effect: {
				en: "Shuffle 5 Water Energy cards from your discard pile into your deck.",
				fr: "Mélangez 5 cartes Énergie Water de votre pile de défausse avec votre deck.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
