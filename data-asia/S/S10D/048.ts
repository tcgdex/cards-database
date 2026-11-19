import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "オリジンディアルガV",
		'zh-tw': "起源帝牙盧卡V"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [483],
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "メタルコーティング",
			'zh-tw': "金屬塗層"
		},

		effect: {
			ja: "自分のトラッシュから{M}エネルギーを2枚まで選び、このポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇最多2張【鋼】能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "じかんだんぜつ",
			'zh-tw': "時間斷絕"
		},

		damage: 180,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651016,
				tcgplayer: 569803,
				cardtrader: 234114,
			},
		},
	]
}

export default card