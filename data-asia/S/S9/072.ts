import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙漠蜻蜓V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "沙沫"
		},

		damage: 70,
		cost: ["Grass", "Fighting"]
	}, {
		name: {
			'zh-tw': "龍之脈衝"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【VMAX】」，則增加160點傷害。這個情況下，選擇3個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: "160+",
		cost: ["Grass", "Fighting", "Fighting", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card