import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小小象"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "身體雖小卻很有力氣。能輕鬆地讓成年人騎在牠背上移動。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踩"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "回覆攻擊"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×30點傷害。"
		},

		damage: "30×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card