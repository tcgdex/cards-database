import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		625,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Metal Sound",
				fr: "Strido-Son",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Wallop",
				fr: "Torgnole Métallique",
			},
			effect: {
				en: "During your next turn, this Pokémon’s Metal Wallop attack does 40 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Torgnole Métallique de ce Pokémon inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 40,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
