import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獨角犀牛"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "頭腦很差但力氣很大，只要撞擊就能把高樓大廈撞得粉粹。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踩落"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方2張卡丟棄。"
		},

		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "大地粉碎"
		},

		damage: 70,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
