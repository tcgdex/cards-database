import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "破破舵輪V"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "惹毛船錨"
		},

		effect: {
			'zh-tw': "若在上個對手的回合，自己的【草】寶可夢因招式的傷害而【氣絕】了，則增加90點傷害。"
		},

		damage: "30+",
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "兆幅鐵錘"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「兆幅鐵錘」。"
		},

		damage: 200,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
