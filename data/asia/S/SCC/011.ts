import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "滴蛛霸"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "把滴蛛放進頭上的水泡裡，一邊餵牠吃剩的食物，一邊照顧牠。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "蟲咬"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "飛射泡彈"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。"
		},

		damage: 110,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card