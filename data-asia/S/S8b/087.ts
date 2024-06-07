import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鬃岩狼人"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "不集結成群，而是單獨生活。只會聽命於能夠引出 自己力量的訓練家。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "惡棍獠牙"
		},

		effect: {
			'zh-tw': "增加自己的棄牌區的「一擊」寶可夢的張數×10點傷害。"
		},

		damage: "80+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card