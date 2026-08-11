import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙奈朵V"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "魔法射擊"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "充溢波動"
		},

		effect: {
			'zh-tw': "在這個回合，若這隻寶可夢恢復了HP，則增加80點傷害。"
		},

		damage: "120+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
