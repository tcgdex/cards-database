import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水晶燈火靈V"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 200,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "奇異之光"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "靈騷"
		},

		effect: {
			'zh-tw': "查看對手的手牌，造成其中訓練家卡的張數×40點傷害。"
		},

		damage: "40×",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card