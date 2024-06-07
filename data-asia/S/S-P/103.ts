import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰伊布"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "冰伊布釋放出的冷氣能製造出粉狀的雪。這使牠受到各個滑雪場的熱烈歡迎。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "冰雹"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "冰霜颱風"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「冰霜颱風」。"
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card