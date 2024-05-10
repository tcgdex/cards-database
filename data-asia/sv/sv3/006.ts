import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ミツハニー",
		'zh-tw': "三蜜蜂"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [415],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "夜に なると １００匹 ほどの ミツハニーが 寄り添い合って 大きな かたまりで 眠る。",
		'zh-tw': "到了晚上就會有１００隻左右的三蜜蜂集聚成堆，依偎著彼此睡覺。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "おすそわけ",
			'zh-tw': "分贈"
		},

		effect: {
			ja: "自分のベンチポケモン1匹のHPを「20」回復する。",
			'zh-tw': "將自己的1隻備戰寶可夢恢復「20」HP。"
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card