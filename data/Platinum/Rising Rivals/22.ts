import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Gastrodon West Sea",
		fr: "Tritosor Mer Occident Niv. 50",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		423,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Shellos West Sea",
		fr: "Sancoki Mer Occident",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Muddy Bomb",
				fr: "Bombe boueuse",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon and 10 damage to each of your opponent's other Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts et 10 dégâts à chacun des autres Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Raging Sea",
				fr: "Mer enragée",
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each of your Benched Pokémon that has any damage counters on it.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires à chacun de vos Pokémon de Banc possédant des marqueurs de dégât.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
