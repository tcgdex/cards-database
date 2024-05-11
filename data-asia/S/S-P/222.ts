import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沼王V"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "純樸"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。"
		}
	}, {
		name: {
			'zh-tw': "泥水頭擊"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【鬥】能量，則增加120點傷害。"
		},

		damage: "100+",
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card