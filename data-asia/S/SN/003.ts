import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉",
		ja: "ゼラオラ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "會用與落雷相同的速度急速接近敵人，然後用銳利的爪子把對手撕碎。",
		ja: "雷が 落ちるのと 同じ 速さで 敵に 急接近。 鋭い ツメで 八つ裂きに する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "瘋狂伏特",
			ja: "ワイルドボルト"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			ja: "このポケモンにも20ダメージ。"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [807]
}

export default card