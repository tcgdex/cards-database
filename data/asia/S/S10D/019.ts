import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "落雷獸"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "會將靜電積蓄在體毛中後放電。當暴風雨來臨前， 會從全身冒出火花。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電氣踢"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "雷電牙"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card