import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵磐岩",
		'zh-cn': "鐵磐岩",
		ja: "テツノイワオ"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'zh-tw': "身體似乎是由金屬構成。 牠的名字來自記載於 古老書籍裡的神秘物體。",
		'zh-cn': "身體似乎是由金屬構成。 牠的名字來自記載於 古老書籍裡的神秘物體。",
		ja: "金属質の ボディらしい。 名前は 古い 本に 記された 謎の 物体から つけられた。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "調整角擊",
			'zh-cn': "調整角擊",
			ja: "アジャストホーン"
		},

		effect: {
			'zh-tw': "若自己的手牌與對手的手牌不是相同張數，則這個招式失敗。",
			'zh-cn': "若自己的手牌與對手的手牌不是相同張數，則這個招式失敗。",
			ja: "自分の手札と相手の手札が同じ枚数でないなら、このワザは失敗。"
		},

		damage: 170,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [1022]
}

export default card