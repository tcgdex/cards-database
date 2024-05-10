import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "カルボウ",
		'zh-tw': "炭小侍"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [935],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
		'zh-tw': "生命寄宿在燃燒的木炭上變成了寶可夢。即使敵人再強， 也會以燃燒的鬥志迎面而戰。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "とうしをもやす",
			'zh-tw': "燃燒鬥志"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張「基本【火】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "げんこつ",
			'zh-tw': "拳骨"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card