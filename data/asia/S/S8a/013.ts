import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊裴爾塔爾"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "據說當生命走到盡頭時，會吸光所有生物的生命，回到繭的狀態。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "破壞呐喊"
		},

		effect: {
			'zh-tw': "選擇最多3張對手的場上寶可夢身上附加的特殊能量卡，將其丟棄。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "黑暗羽毛"
		},

		damage: 100,
		cost: ["Darkness", "Colorless", "Colorless"]
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