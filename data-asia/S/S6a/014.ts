import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炎帝"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "據說如果炎帝吼叫的話，世界上的某處火山就會爆發。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "憤怒之牙"
		},

		effect: {
			'zh-tw': "造成自己備戰區所有「一擊」寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "10×",
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "熱力衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card