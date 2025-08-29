import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "REMORAID",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [223],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "シャープシュート",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
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
