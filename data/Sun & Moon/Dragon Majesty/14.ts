import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Salazzle",
		fr: "Malamandre",
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		758,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Ring of Fire",
				fr: "Anneau de Feu",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned. It can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé. Il ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 80,

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
