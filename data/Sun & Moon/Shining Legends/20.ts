import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
	},
	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-Éclaboussure",
			},

			damage: 130,

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
