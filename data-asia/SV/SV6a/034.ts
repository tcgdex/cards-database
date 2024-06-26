import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏賊王"
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "要是盯著牠的發光體看， 就會馬上陷入催眠狀態， 並且受到牠的控制。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "勾結觸手"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到120點傷害。在這個回合，若沒有從手牌使出「‌‌庫瑟洛斯奇的企圖」，則這個招式失敗。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card