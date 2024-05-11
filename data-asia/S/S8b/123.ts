import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋁鋼龍VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "摩天樓"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的身上附有特殊能量的寶可夢招式的傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "超極巨碎骨粉身"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 220,
		cost: ["Fighting", "Metal", "Metal"]
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card