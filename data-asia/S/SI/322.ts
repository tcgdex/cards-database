import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "基格爾德"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "制裁潮漩"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到對手已經獲得的獎賞卡的張數×40點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Grass", "Fighting", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card