import { Card } from "models/database/card"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燈籠魚",
		'th-th': "ชอนชี"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "在黑暗的海底，觸手上不斷閃爍的亮光是牠唯一的通訊手段。",
		'th-th': "ในก้นมหาสมุทรอันมืดมิด แสงจากหนวดที่กระพริบอย่างต่อเนื่องคือวิธีการเดียวที่ใช้สื่อสารกัน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電球",
			'th-th': "อิเล็กทริกบอล"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card