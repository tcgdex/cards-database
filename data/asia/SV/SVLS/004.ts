import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "オドリドリ"
	},

	illustrator: "Heisuke Kitazawa",
	category: "Pokemon",
	dexId: [741],
	hp: 90,
	types: ["Fire"],

	description: {
		'ja-jp': "くれないのミツを 吸った 姿。 情熱的な ステップを 踏み 激しい 炎を 巻き起こす。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "エネアシスト"
		},

		effect: {
			'ja-jp': "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。"
		}
	}, {
		cost: ["Fire"],

		name: {
			'ja-jp': "ひばな"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card