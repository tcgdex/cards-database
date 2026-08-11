import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "達克萊伊"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "有著引誘人們進入深層睡眠，並使其作夢的能力。會在新月之夜活動。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "黑暗防守"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【惡】能量，則這隻寶可夢受到招式的傷害「-20」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暗之螺旋"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【惡】能量的數量×20點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card