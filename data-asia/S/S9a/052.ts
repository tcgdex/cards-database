import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 大劍鬼V"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "藤箱擊落"
		},

		effect: {
			'zh-tw': "選擇最多2張對手的場上寶可夢身上附加的「寶可夢道具」卡，將其丟棄。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "暗影斬"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 180,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card