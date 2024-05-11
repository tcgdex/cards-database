import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 蛇紋熊"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "這似乎是蛇紋熊最古老的樣子。會之字形亂走， 把周圍弄得一團糟。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "舌舔"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card