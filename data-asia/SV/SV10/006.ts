import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蘭螳花",
		'zh-cn': "蘭螳花",
		ja: "ラランテス"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "會用甜甜花香吸引蟲寶可夢接近， 然後趁著牠們誤以為自己是夥伴 而掉以輕心時用鐮刀奪取性命。",
		'zh-cn': "會用甜甜花香吸引蟲寶可夢接近， 然後趁著牠們誤以為自己是夥伴 而掉以輕心時用鐮刀奪取性命。",
		ja: "花の 甘い 香りに 誘われて 寄ってきた 虫ポケモンを 仲間と 油断させ カマで 仕留める。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "飛葉快刀",
			'zh-cn': "飛葉快刀",
			ja: "はっぱカッター"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "花切舞",
			'zh-cn': "花切舞",
			ja: "はなきりまい"
		},

		effect: {
			'zh-tw': "從自己的手牌將2張「基本【草】能量」卡丟棄。若無法丟棄2張卡，則這個招式失敗。",
			'zh-cn': "從自己的手牌將2張「基本【草】能量」卡丟棄。若無法丟棄2張卡，則這個招式失敗。",
			ja: "自分の手札から「基本エネルギー」を2枚トラッシュする。2枚トラッシュできないなら、このワザは失敗。"
		},

		damage: 130,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [754]
}

export default card