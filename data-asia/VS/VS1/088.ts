import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "カレンのマグマー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [126],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ビート",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "ember",
			},
			effect: {
				ja: "この攻撃を使用するために、カレンのマグマーに取り付けられた消防剤カードを捨ててください。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
