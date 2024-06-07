import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超壞星"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "為了能承受住伽勒爾地區冰涼的水溫，牠用腳搭起圓頂，藉助體溫保持內部的溫暖。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "自我再生"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。將這隻寶可夢的HP全部恢復。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "毒之鞭"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
