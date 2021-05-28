import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		689,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Binacle",
		fr: "Opermine",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Seven Shock",
				fr: "Choc à Sept",
			},
			effect: {
				en: "If you have exactly 7 cards in your hand, your opponent's Active Pokémon is now Paralyzed.",
				fr: "S’il vous reste exactement 7 cartes en main, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
			},

			damage: 90,

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
