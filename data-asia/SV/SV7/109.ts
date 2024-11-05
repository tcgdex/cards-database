import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉",
		'zh-cn': "捷拉奧拉",
		ja: "ゼラオラ"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "以媲美閃電的速度奔跑， 用能釋放高壓電的爪子 將敵人撕得粉碎。",
		'zh-cn': "以媲美閃電的速度奔跑， 用能釋放高壓電的爪子 將敵人撕得粉碎。",
		ja: "雷に 匹敵する スピードで 走り 大電圧を 発する ツメで 敵を 八つ裂きにする。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鬥戰雷電",
			'zh-cn': "鬥戰雷電",
			ja: "コンバットサンダー"
		},

		effect: {
			'zh-tw': "增加對手的備戰寶可夢的數量×20點傷害。",
			'zh-cn': "增加對手的備戰寶可夢的數量×20點傷害。",
			ja: "相手のベンチポケモンの数×20ダメージ追加。"
		},

		damage: "20＋",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	dexId: [807],
	rarity: "None"
}

export default card