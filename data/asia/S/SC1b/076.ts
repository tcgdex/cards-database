import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蟾蜍王"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		'zh-tw': "透過震動全身的瘤來引發地震般的晃動。與不良蛙是相近的物種。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "轉轉拳"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "共振"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【混亂】，則增加120點傷害。"
		},

		damage: "120+",
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
