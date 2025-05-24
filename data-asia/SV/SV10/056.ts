import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>阿柏蛇",
		'zh-cn': "<火箭隊的>阿柏蛇",
		ja: "ロケット団のアーボ"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "能夠自由地讓下顎脫臼，因此 就連體型大的獵物都吞得下去， 但身體會變笨重而無法動彈。",
		'zh-cn': "能夠自由地讓下顎脫臼，因此 就連體型大的獵物都吞得下去， 但身體會變笨重而無法動彈。",
		ja: "自由に あごを 外せるので 大きな 獲物でも 飲みこめるが 重くなって 動けなくなる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "扯後腿",
			'zh-cn': "扯後腿",
			ja: "あしをひっぱる"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咬",
			'zh-cn': "咬",
			ja: "かじる"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [23]
}

export default card