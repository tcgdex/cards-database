import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "破破舵輪"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "在海底飄蕩的海藻吸收了沉船的零件後轉生而成的幽靈寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鉤住"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "特殊船錨"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有特殊能量，則增加60點傷害。"
		},

		damage: "60+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card