import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		fr: "Phyllali",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [470],
	hp: 90,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Vive-Attaque",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "10+",
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				fr: "Assistance Énergétique",
			},
			effect: {
				fr: "Attachez une carte Énergie de base de votre pile de défausse à I de vos Pokémon de Banc.",
			},
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',

			thirdParty: {
				cardmarket: 361721,
			}
		}
	]
}

export default card

