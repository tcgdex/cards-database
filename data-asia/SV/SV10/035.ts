import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>茸茸羊",
		'zh-cn': "<火箭隊的>茸茸羊",
		ja: "ロケット団のモココ"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "儲存了過多電力的結果， 造成牠身體表面有些部分 連胎毛都長不出來。",
		'zh-cn': "儲存了過多電力的結果， 造成牠身體表面有些部分 連胎毛都長不出來。",
		ja: "電気を 蓄えすぎた 結果 体の 表面に 産毛すら 生えない 部分が できてしまった。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電擊",
			'zh-cn': "電擊",
			ja: "でんきショック"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [180]
}

export default card