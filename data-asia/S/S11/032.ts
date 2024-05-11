import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "滴蛛霸"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "會用腳發射水泡，包住獵物讓其溺水， 然後花時間慢慢品嚐。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "溺水彈"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。再選擇1個那隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "魯莽頭擊"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card