import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小貓怪",
		th: "โคลิงก์"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "一旦感知到危險，全身的體毛就會發光，趁對手眼睛被閃到時逃之夭夭。",
		th: "เมื่อรับรู้ถึงอันตราย ขนทั่วร่างกายจะเปล่งแสงออกมา และจะหลบหนีในช่วงที่ฝ่ายตรงข้ามตาพร่ามัวอยู่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "後踢",
			th: "เตะกลับหลัง"
		},

		damage: 20,
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