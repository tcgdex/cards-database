import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "妙蛙草"
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "當背上的花苞長大之後，牠似乎就無法再用兩隻腳站立起來了。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "招集芳香"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "飛葉快刀"
		},

		damage: 60,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card