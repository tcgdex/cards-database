import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "滴蛛霸"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
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