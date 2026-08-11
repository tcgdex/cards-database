import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小貓怪"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "一旦感知到危險，全身的體毛就會發光，趁對手眼睛被閃到時逃之夭夭。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "逆境"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為3張以下，則增加50點傷害。"
		},

		damage: "10+",
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card