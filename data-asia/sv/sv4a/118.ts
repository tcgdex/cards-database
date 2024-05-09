import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤミカラス"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	dexId: [198],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "夜 姿を 見かけると 不吉なことが 起きると 信じられ 忌み嫌われている ポケモン。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "スピンターン"
		},

		damage: 10,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。"
		}
	}, {
		cost: ["Darkness"],

		name: {
			ja: "だんけつのつばさ"
		},

		damage: "20×",

		effect: {
			ja: "自分のトラッシュにある、ワザ「だんけつのつばさ」を持つポケモンの枚数×20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card