import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Shellos East Sea",
		fr: "Sancoki Mer Orient Niv. 21",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		422,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ripple",
				fr: "Ondulation",
			},
			effect: {
				en: "Flip a coin. If heads, put 1 damage counter on each of your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Brine",
				fr: "Saumure",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire qui ne possède pas de marqueurs de dégât. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
