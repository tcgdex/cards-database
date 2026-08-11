import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火神蛾",
		th: "อุลกามอธ"
	},

	illustrator: "Mika Pikazo",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "傳說中，牠是從熊熊燃燒著火焰的繭中誕生。會去救助受寒冷所苦的人和寶可夢。",
		th: "เกิดออกมาจากรังไหมเปลวเพลิงที่ลุกไหม้ มีตำนานกล่าวไว้ว่าเคยช่วยผู้คนหรือโปเกมอนที่ทุกข์ทรมานจากความหนาว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "烈焰",
			th: "เผาไหม้"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "火焰旋渦",
			th: "วงล้อไฟ"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 170,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card