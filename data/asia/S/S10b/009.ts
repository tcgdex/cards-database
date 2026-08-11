import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火恐龍"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "揮動燃燒著火焰的尾巴，用鋒利的爪子撕裂對手。性情十分粗暴。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "抓"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "噴射火焰"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的【火】能量，將其丟棄。"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card