import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロックのカブトップ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [141],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "真空カット",
			},
			effect: {
				ja: "衰弱や抵抗を適用しないでください。防御するポケモンが戦闘抵抗を持っている場合、この攻撃は20ではなく40のダメージを与えます。",
			},
			damage: 20,
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
