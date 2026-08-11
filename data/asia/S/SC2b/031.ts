import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "落雷獸"
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "會將靜電積蓄在體毛中後放電。當暴風雨來臨前，會從全身冒出火花。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "十萬伏特"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
