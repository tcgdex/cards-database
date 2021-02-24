import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Brionne",
		fr: "Otarlette",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		729,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Popplio",
		fr: "Otaquin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Disarming Voice",
				fr: "Voix Enjôleuse",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 50,

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
