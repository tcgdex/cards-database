import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "九尾"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "每一根尾巴裡都蘊含著神通力。據說牠的壽命長達１０００年。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "禍不單行"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢處於特殊狀態，則增加90點傷害。"
		},

		damage: "30+",
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "搖曳之火"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 90,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
