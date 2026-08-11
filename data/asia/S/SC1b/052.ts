import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炎兔兒"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "不斷奔跑使體溫升高後，火之能量會在牠體內循環，促使牠發揮出真正的力量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火花"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
