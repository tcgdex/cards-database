import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頑皮熊貓",
		'zh-cn': "頑皮熊貓",
		ja: "ヤンチャム"
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "會模仿自己敬為頭領的 流氓熊貓，向牠學習戰鬥 及捕捉獵物的方法。",
		'zh-cn': "會模仿自己敬為頭領的 流氓熊貓，向牠學習戰鬥 及捕捉獵物的方法。",
		ja: "親分と 慕う ゴロンダの 真似を する ことで 戦い方や 獲物の 捕まえ方を 学ぶ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "瞪眼",
			'zh-cn': "瞪眼",
			ja: "にらみつける"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "踢倒",
			'zh-cn': "踢倒",
			ja: "けたぐり"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [674]
}

export default card