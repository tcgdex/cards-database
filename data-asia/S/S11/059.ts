import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頓甲"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "牙齒越大越長，在族群裡的地位就越高。 牙齒的生長需要很長的時間。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "超頻旋轉"
		},

		effect: {
			'zh-tw': "在這個回合，若進化成這隻寶可夢，則這個招式失敗。"
		},

		damage: 110,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "巨大之牙"
		},

		damage: 170,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card