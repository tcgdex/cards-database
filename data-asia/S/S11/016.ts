import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔岩蝸牛"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "身體總是不斷起伏著，像熔岩一樣灼熱。 會不時從殼裡冒出火花。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火焰"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "放逐火山"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的所有能量放置於放逐區。"
		},

		damage: 220,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card