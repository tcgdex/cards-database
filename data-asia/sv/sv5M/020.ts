import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火斑喵",
		th: "เนียบี"
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "一有時間就會去舔身體整理毛髮。會燃燒積在腹中 的落毛來使出火屬性招式。",
		th: "ถ้ามีเวลาว่างก็จะเลียแต่งขน เผาขนหลุดร่วงที่สะสมอยู่ในท้องแล้วปล่อยออกมาเป็นท่าไฟ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擊掌奇襲",
			th: "หลอกล่อ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		},

		damage: 10,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card