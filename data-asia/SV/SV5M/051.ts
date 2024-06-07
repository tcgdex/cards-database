import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵轍跡",
		th: "รอยล้อเหล็ก"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "近年曾經有人目擊到牠。是與古老的探險記裡記載的 不明物體長得很像的寶可夢。",
		th: "มีผู้พบเห็นเมื่อไม่กี่ปีที่ผ่านมานี้ เป็นโปเกมอนที่มีลักษณะคล้ายกับวัตถุลึกลับที่ระบุไว้ในบันทึกการสำรวจเก่าแก่"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "二重核心",
			th: "ดูอัลคอร์"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢身上附有「驅勁能量 未來」，這隻寶可夢改為【鬥】與【鋼】2種屬性。",
			th: "ตราบใดที่โปเกมอนนี้มี [บูสต์เอนเนอร์จี้ อนาคต] ติดอยู่ โปเกมอนนี้จะเป็น 2 ประเภทคือ[ต่อสู้]และ[โลหะ]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "路徑輪",
			th: "พาสวีล"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์"
		},

		damage: 60,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card