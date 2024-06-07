import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夜盜火蜥",
		th: "ยาโทโมริ"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "悄悄地從背後靠近獵物，在對方察覺之前釋放毒氣，讓對方動彈不得。",
		th: "ลอบเข้าใกล้เหยื่อจากด้านหลัง ก่อนที่เหยื่อจะรู้ตัว มันจะอาบตัวเหยื่อด้วยแก๊สพิษและทำให้เคลื่อนไหวไม่ได้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚信號",
			th: "คอลซายน์"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card