import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圓蝌蚪"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "如果水面上擴散開美麗的波紋，就代表有圓蝌蚪正在水面下用高昂的聲音鳴叫。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "團團轉"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
