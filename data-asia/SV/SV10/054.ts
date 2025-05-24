import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "恰雷姆",
		'zh-cn': "恰雷姆",
		ja: "チャーレム"
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "可以用藉由瑜珈修行 鍛鍊出來的精神力量， 來預測對手的行動。",
		'zh-cn': "可以用藉由瑜珈修行 鍛鍊出來的精神力量， 來預測對手的行動。",
		ja: "ヨガの 修行で 鍛えられた サイコパワーで 相手の 動きを 予測する ことが できるのだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "合氣掌",
			'zh-cn': "合氣掌",
			ja: "あいきしょう"
		},

		effect: {
			'zh-tw': "若這隻寶可夢與對手的戰鬥寶可夢身上附加的能量數量相同，則增加120點傷害。",
			'zh-cn': "若這隻寶可夢與對手的戰鬥寶可夢身上附加的能量數量相同，則增加120點傷害。",
			ja: "このポケモンと相手のバトルポケモンについているエネルギーの数が同じなら、120ダメージ追加。"
		},

		damage: "50＋",
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [308]
}

export default card