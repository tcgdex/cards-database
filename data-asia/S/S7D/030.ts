import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "灰塵山V"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "垃圾臭氣"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 40,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "污泥炸彈"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card