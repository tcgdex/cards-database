import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿利多斯"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'zh-tw': "會吐絲來捕捉獵物。 每到夜晚就會離開巢穴， 積極地展開狩獵。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "線帶纏繞"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。"
		},

		damage: "10+",
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "毒牙"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card