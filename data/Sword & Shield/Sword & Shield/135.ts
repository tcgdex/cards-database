import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Corviknight",
		fr: "Corvaillus",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Corvisquire",
		fr: "Bleuseille",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
			},

			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Wings",
				fr: "Ailes de Fer",
			},
			effect: {
				en: "You may discard 2 Energy from this Pokémon. If you do, during your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Vous pouvez défausser 2 Énergies de ce Pokémon. Dans ce cas, pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
