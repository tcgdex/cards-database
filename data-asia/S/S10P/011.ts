import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小火馬"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "在草原上群居生活。剛誕生的 幼崽身上沒有火焰鬃毛，而是會 在出生後一小時左右長出來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火之尾"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card