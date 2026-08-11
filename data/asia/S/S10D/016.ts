import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙刃丸"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "或許是拜平日的鍛鍊所賜， 運用兩枚扇貝貝刀的高超技術 能令劍豪也甘拜下風。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "硬殼利刃"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。"
		},

		damage: "20+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card