import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "櫻花寶",
		ja: "チェリンボ"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "身體越紅的櫻花寶含有的營養越豐富，味道也很甜很好吃。",
		ja: "体が 赤い チェリンボほど 栄養が 多く 玉の 味も 甘くて おいしいよ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "樹葉",
			ja: "このは"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [420]
}

export default card