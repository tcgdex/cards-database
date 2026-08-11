import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 魔牆人偶",
		th: "กาลาร์ บาร์เรียด"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "會從腳底釋放出冷氣。一整天都會在自己凍住的地板上努力練習踢踏舞。",
		th: "ปล่อยไอเย็นจากหลังเท้า ทุ่มเทกับการเต้นระบำปลายเท้าทั้งวันบนพื้นที่แช่แข็ง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊",
			th: "ปัด"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "找到",
			th: "ค้นหา"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดไอเท็มจากสำรับการ์ดฝ่ายเรา 1 ใบ ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card