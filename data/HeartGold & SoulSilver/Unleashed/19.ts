import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bulk Up",
				fr: "Gonflette",
			},
			effect: {
				en: "During your next turn, each of Lucario’s attacks does 30 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Lors de votre prochain tour, chaque attaque de Lucario inflige 30 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Magnum Punch",
				fr: "Poing magnum",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
