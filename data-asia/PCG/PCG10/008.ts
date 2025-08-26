import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "カリザード",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [6],
	hp: 120,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "燃焼",
			},
			damage: 30,
		},
		{
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: {
				ja: "破裂してインフェルノ",
			},
			effect: {
				ja: "防御するポケモンはそれぞれ燃えています。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
