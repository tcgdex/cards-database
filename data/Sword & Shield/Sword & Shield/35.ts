import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Cinderace",
		fr: "Pyrobut",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Raboot",
		fr: "Lapyro",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Pyro Ball",
				fr: "Ballon Brûlant",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Burning Kick",
				fr: "Coup de Pied Brûlant",
			},
			effect: {
				en: "Discard all Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie de ce Pokémon.",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
