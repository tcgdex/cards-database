import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "三地鼠"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "擅長團隊合作的三胞胎地鼠。有時會挖掘到１００公里深的地底，甚至引發地震。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "泥巴炸彈"
		},

		damage: 60,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
