import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超壞星"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "為了能承受住伽勒爾地區冰涼的水溫，牠用腳搭起圓頂， 藉助體溫保持內部的溫暖。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "毒液衝擊"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加120點傷害。"
		},

		damage: "10+",
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "尖刺射擊"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card