import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蟾蜍王"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	description: {
		'zh-tw': "在老年人之間廣受歡迎。因為他們覺得牠身上的瘤發出的震動拿來按摩剛剛好。"
	},

	stage: "Stage2",

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
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card