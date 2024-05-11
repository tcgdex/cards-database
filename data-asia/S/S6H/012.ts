import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小獅獅"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "血氣方剛且好奇心旺盛。當牠生氣或是開始戰鬥時，短短的鬃毛就會變熱。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蕩蕩波"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量與【撤退】所需的能量，各增加1個【無】能量。"
		},

		damage: 60,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "巨聲"
		},

		damage: 160,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card