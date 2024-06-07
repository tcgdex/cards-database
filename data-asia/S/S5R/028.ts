import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胖嘟嘟",
		th: "บูรุนเจล"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "每到滿月時，胖嘟嘟會成群結隊地來到海面上。這麼做是為了等待獵物上門。",
		th: "เมื่อพระจันทร์เต็มดวงทั้งฝูงจะพากันขึ้นมาบนผิวน้ำทะเล รอคอยให้เหยื่อเข้ามา"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "沉澱",
			th: "ตะกอนนอนก้น"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的【水】能量卡的張數×10點傷害。",
			th: "แดเมจจะเท่ากับจำนวนการ์ดพลังงาน [น้ำ] บนตำแหน่งทิ้งการ์ดฝ่ายเรา x10"
		},

		damage: "10×",
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card