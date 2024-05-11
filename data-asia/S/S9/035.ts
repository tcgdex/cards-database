import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電擊獸"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "很多發電廠會用地面屬性的寶可夢當守衛，藉以對抗 想伺機偷吃電力的電擊獸。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電磁波"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "伏特頭擊"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card