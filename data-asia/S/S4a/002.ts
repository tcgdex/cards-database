import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "投羽梟"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "連續投出被稱為是刃羽的刀般銳利羽毛，能精準地貫穿敵人要害。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "飛葉快刀"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card