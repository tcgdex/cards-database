import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013 (FR)"

const card: Card = {
	name: {
		fr: "Noctali",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [197],
	hp: 90,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				fr: "Morsure",
			},
			damage: 20,
		},
		{
			cost: ["Darkness", "Colorless"],
			name: {
				fr: "Assaut Ténébreux",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "30+",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,
}

export default card

