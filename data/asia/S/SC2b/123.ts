import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "掘掘兔"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		'zh-tw': "擅長用耳朵挖洞。只需一個晚上就能挖出深至地下１０公尺的巢穴。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "瘋狂派對"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的，持有「瘋狂派對」招式的寶可夢的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
