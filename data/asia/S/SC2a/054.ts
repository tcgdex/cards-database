import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴噬龜V"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "堅硬甲殼"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "强力啃咬"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
