import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Politoed",
		fr: "Tarpaud",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		186,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "King’s Song",
				fr: "Chant du Roi",
			},
			effect: {
				en: "Ignore all Colorless Energy in the attack cost of each of your Poliwag, Poliwhirl, and Poliwrath’s attacks.",
				fr: "Ignorez toutes les Énergies Colorless dans les coûts d'attaque des attaques de vos Ptitard, Têtarte et Tartard.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
				fr: "Mégaphone",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
