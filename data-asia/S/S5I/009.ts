import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炎帝",
		th: "เอ็นเต"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "據說如果炎帝吼叫的話，世界上的某處火山就會爆發。",
		th: "ว่ากันว่าถ้าเอ็นเตคำราม ภูเขาไฟแห่งใดแห่งหนึ่งในโลกจะปะทุ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "高溫衝刺",
			th: "ฮีทแดช"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌選擇1張【火】能量卡，附於這隻寶可夢身上。",
			th: "หากต้องการ เลือกการ์ดพลังงาน [ไฟ] 1 ใบจากการ์ดบนมือฝ่ายเรา ติดที่โปเกมอนนี้"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "火焰牙",
			th: "เขี้ยวไฟ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [ไหม้]"
		},

		damage: 90,
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