import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炒炒豬",
		th: "จาโอบู"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'zh-tw': "當體內的火焰熊熊燃燒時，行動就會變得更加敏捷俐落。遇到危機時會噴出煙霧。",
		th: "พอเปลวไฟในตัวลุกไหม้ จะขยับตัวได้ฉับไวและเร็วขึ้น เมื่อเข้าตาจน จะพ่นควันออกมา"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			th: "กระแทก"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "烈焰",
			th: "เผาไหม้"
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card