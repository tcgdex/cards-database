import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍捲雲"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "從龍捲雲尾部噴出的能量會引起暴風雨。威力足以將整棟房屋吹走。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "噴射氣流"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "空氣斬"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
