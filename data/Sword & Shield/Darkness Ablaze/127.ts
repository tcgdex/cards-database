import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Klinklang",
		fr: "Cliticlic"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Klang",
		fr: "Clic"
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beam",
				fr: "Rayon"
			},

			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clockwork",
				fr: "Mécanisme"
			},
			effect: {
				en: "If you don’t have Klink and Klang on your Bench, this attack does nothing.",
				fr: "Si vous n’avez pas Tic et Clic sur votre Banc, cette attaque ne fait rien."
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 3,



}

export default card
