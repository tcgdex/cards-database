import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狡猾天狗",
		th: "ดาเทนกุ"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'zh-tw': "過去被視為森林之神而受到畏懼的寶可夢。有著讀取對手想法並 搶先一步行動的能力。",
		th: "โปเกมอนที่หวาดกลัวกันว่าเป็นเทพเจ้าแห่งป่า มีพลังพิเศษอ่านความคิดฝ่ายตรงข้ามแล้วชิงลงมือก่อนได้"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "驅趕龍捲風",
			th: "ทอร์นาโดผลักไส"
		},

		effect: {
			'zh-tw': "選擇3隻對手的備戰寶可夢。然後，將對手的沒有選擇的所有備戰寶可夢與附加的卡，全部放回對手的牌庫並重洗。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 3 ตัว หลังจากนั้น นำโปเกมอนบนเบนช์ฝ่ายตรงข้ามทุกตัวที่ไม่ได้เลือก และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "能量閉環",
			th: "เอนเนอร์จี้ลูป"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，放回手牌。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก นำกลับขึ้นมือ"
		},

		damage: 140,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card