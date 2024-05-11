import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵掌力士"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "體型壯碩的鐵掌力士未必就很強。 也有體型雖小，但身輕如燕 且技巧高超的鐵掌力士存在。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "轉倒"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "筋肉巴掌"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card