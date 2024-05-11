import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨石丁"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "每年會有一天，牠們會在特定的時間突然出現， 聚集在一起排成一個圈。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "大地鼓動"
		},

		effect: {
			'zh-tw': "若場上有競技場卡，則增加30點傷害。"
		},

		damage: "30+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "兆幅鐵錘"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「兆幅鐵錘」。"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card