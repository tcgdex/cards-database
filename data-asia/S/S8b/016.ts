import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火恐龍"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "揮動燃燒著火焰的尾巴，用鋒利的爪子撕裂對手。性情十分粗暴。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "森林火災"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方3張卡丟棄。"
		},

		damage: 60,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card