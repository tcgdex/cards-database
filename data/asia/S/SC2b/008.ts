import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "力壯雞"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "會用鳥嘴裡吐出的灼熱火焰和極具破壞力的踢腿來戰鬥。因為叫聲很大，所以非常吵。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "踢飛"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "熱力喙"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 40,
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
