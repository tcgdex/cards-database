import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鉗尾蠍"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "將自己的身體埋在沙子裡，一聲不響地等待獵物。祖先和燒火蚣的祖先是近親。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "毒針"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "利爪揮砍"
		},

		damage: 50,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
