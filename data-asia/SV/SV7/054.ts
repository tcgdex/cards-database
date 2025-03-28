import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "恰雷姆ex",
		'zh-cn': "恰雷姆ex",
		ja: "チャーレムex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "氣功指壓",
			'zh-cn': "氣功指壓",
			ja: "きこうあつ"
		},

		effect: {
			'zh-tw': "在對手的戰鬥寶可夢身上放置傷害指示物直到剩餘HP變為「50」為止。",
			'zh-cn': "在對手的戰鬥寶可夢身上放置傷害指示物直到剩餘HP變為「50」為止。",
			ja: "相手のバトルポケモンの残りHPが「50」になるように、ダメカンをのせる。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "瑜伽踢",
			'zh-cn': "瑜伽踢",
			ja: "ヨガキック"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力。",
			'zh-cn': "這個招式的傷害不計算弱點・抵抗力。",
			ja: "このワザのダメージは弱点・抵抗力を計算しない。"
		},

		damage: 190,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare"
}

export default card