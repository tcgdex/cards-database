import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燭光靈"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "頭上燃燒著的燭光讓牠的身體保持微熱。會拉著迷路孩子的手，將他們帶向靈界。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "焦焦"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
