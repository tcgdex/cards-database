import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013 (FR)"

const card: Card = {
	name: {
		fr: "Aquali",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [134],
	hp: 100,
	types: ["Water"],

	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				fr: "Pistolet à O",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				fr: "Aqua-Jet",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "40+",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],

	retreat: 2,
}

export default card

