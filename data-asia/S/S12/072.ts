import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "快龍",
		th: "ไคริว"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'zh-tw': "心地善良的寶可夢。只要發現溺水的人或寶可夢， 就會忍不住去救助對方。",
		th: "เป็นโปเกมอนจิตใจดีที่ทนอยู่เฉยไม่ได้ จะต้องเข้าไปช่วยทันทีเวลาเห็นคนหรือโปเกมอนกำลังจะจมน้ำ"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "龍爪",
			th: "ดรากอนคลอว์"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "能量颶風",
			th: "เอนเนอร์จี้เฮอริเคน"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ แล้วสับสำรับการ์ด"
		},

		damage: 180,
		cost: ["Water", "Lightning", "Colorless", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card