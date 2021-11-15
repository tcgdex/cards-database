import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		256,
	],
	hp: 80,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Torchic",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Focus Energy",
				fr: "Puissance"
			},
			effect: {
				en: "During your next turn, Combusken's High Jump Kick attack's base damage is 70.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Pied voltige de Galifeu sont de 70."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied voltige"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
