import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狐大盜",
		th: "ฟ็อกสไล"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "會偷偷在看中的獵物身上留下標記，追蹤目標的氣味， 在對方放鬆警戒時偷盜。",
		th: "ทำสัญลักษณ์ไว้ที่เหยื่อที่เล็งไว้เงียบ ๆ แล้วตามกลิ่นไป ถ้าเผลอเมื่อไหร่จะเข้ามาขโมย"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "五里霧中",
			th: "พูดกลบเกลื่อน"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為2張以下則生效。只要這隻寶可夢在場上，對手從手牌使出支援者時，自己的備戰區的所有「寶可夢【V】」不會受到其效果的影響。",
			th: "จะทำงาน ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้ามน้อยกว่าหรือเท่ากับ 2 ใบ ตราบใดที่โปเกมอนนี้ยังอยู่ [โปเกมอน【V】] บนเบนช์ฝ่ายเราทุกตัวจะไม่ได้รับเอฟเฟกต์เมื่อฝ่ายตรงข้ามนำการ์ดซัพพอร์ตจากบนมือออกมาใช้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "銳利之牙",
			th: "เขี้ยวคม"
		},

		damage: 110,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card