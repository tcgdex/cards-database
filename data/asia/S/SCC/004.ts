import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "時拉比V"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "嫩葉之舞"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇任意數量的【草】基本能量卡，以任意方式附於自己的寶可夢身上。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "斬返"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card