import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โมโมวาโร่ex"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "โซ่ครอบงำ"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกโปเกมอน[ความมืด]บนเบนช์ฝ่ายเรา (ยกเว้น [โมโมวาโร่【ex】]) 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำให้โปเกมอนใหม่บนตำแหน่งต่อสู้เป็นสภาวะ[พิษ] เทิร์นนี้ ถ้าใช้ [โซ่ครอบงำ] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้"
		}
	}],

	attacks: [{
		name: {
			th: "หงุดหงิดระเบิด"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว x60"
		},

		damage: "60×",
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card