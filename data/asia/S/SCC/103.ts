import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詐唬魔"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'zh-tw': "喜歡動歪腦筋，把人們引誘到深夜的森林中。似乎擁有培育農作物的能力。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "破壞一擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 40,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card