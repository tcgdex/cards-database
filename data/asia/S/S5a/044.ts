import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熊徒弟",
		th: "ดาคุมะ"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "拉緊頭上又白又長的體毛就會變得氣勢高昂，並且由丹田湧出力量。",
		th: "เมื่อดึงขนยาวสีขาวบนหัวจะทำให้จิตวิญญาณนักสู้เพิ่มขึ้นและทำให้พลังเดือดพุ่งออกมาจากท้องน้อย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鍛鍊",
			th: "ฝึกฝน"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張基本能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "肘擊",
			th: "ตีศอก"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card