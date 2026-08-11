import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "禿鷹娜"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "骨之封鎖"
		},

		effect: {
			'zh-tw': "在下個對手的回合，無法從手牌使出寶可夢將受到這個招式的寶可夢進化。"
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "暗黑利刃"
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card