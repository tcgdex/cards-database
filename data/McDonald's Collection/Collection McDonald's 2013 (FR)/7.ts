import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013 (FR)"

const card: Card = {
	name: {
		fr: "Phyllali",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
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
				fr: "Lame-Feuille",
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
}

export default card

