import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "比克提尼",
		th: "วิคทินี"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "如果分享到比克提尼產出的無限能量， 全身就會充滿力量。",
		th: "เมื่อวิคทินีแบ่งปันพลังงานที่เกิดขึ้นมาอย่างไร้ขีดจำกัดให้ ก็จะมีพลังอย่างเปี่ยมล้นไปทั่วร่าง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "輔助火焰",
			th: "แอสซิสต์เฟลม"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張【火】能量卡，以任意方式附於自己的寶可夢身上。",
			th: "เลือกการ์ดพลังงาน[ไฟ]ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "火焰",
			th: "ไฟ"
		},

		damage: 40,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card