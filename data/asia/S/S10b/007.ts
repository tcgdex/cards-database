import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿利多斯"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "會吐絲來捕捉獵物。每到夜晚就會離開巢穴，積極地展開狩獵。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "毒線束縛"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【中毒】與【麻痺】。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「50」HP。"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card