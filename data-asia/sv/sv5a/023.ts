import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ケロマツ"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [656],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "胸と 背中から 泡を 出す。 弾力のある 泡で 攻撃を 受け止めて ダメージを 減らす。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "むれる"
		},

		effect: {
			ja: "自分の山札から「ケロマツ」を2枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "はねまわる"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card