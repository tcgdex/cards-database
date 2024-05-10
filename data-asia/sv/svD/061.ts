import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "螺釘地鼠"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "會用爪子在地底挖掘前進。一些農民因為擔心牠會 因此糟蹋蔬菜而討厭牠。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "上衝"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。"
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card