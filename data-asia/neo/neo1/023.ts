import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "馬",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [116],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				ja: "フィンスラップ",
			},
			effect: {
				ja: "攻撃が対戦相手の最後のターン中に馬を破損した場合、この攻撃は20のダメージに加えて10ダメージを与えます。そうでない場合、この攻撃は20ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
