import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パモット",
		'zh-tw': "布土撥"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	dexId: [922],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "手のひらで 打撃を 加えつつ 肉球で 電撃を 浴びせる 独特の 格闘技を 使う。",
		'zh-tw': "使用的格鬥技非常獨特，會一邊用手掌給予打擊， 並一邊用肉球施放電擊。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "でんきショック",
			'zh-tw': "電擊"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "ヘッドボルト",
			'zh-tw': "伏特頭擊"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card