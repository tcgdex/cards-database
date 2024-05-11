import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "列陣兵"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "６隻為一體的寶可夢。慣於團隊行動，會一邊變換陣形一邊戰鬥。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭錘"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "背水列陣"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為1張，則增加160點傷害。"
		},

		damage: "60+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card