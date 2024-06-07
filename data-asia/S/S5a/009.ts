import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燃燒蟲",
		th: "เมลาร์วา"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "會用火焰保護自己。過去的人們相信牠的巢在太陽上。",
		th: "ใช้เปลวเพลิงปกป้องตัวเอง ผู้คนในสมัยก่อนเคยเชื่อว่ามีรังอยู่บนดวงอาทิตย์"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蓄能焰襲",
			th: "ไนโตรชาร์จ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【火】能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงาน [ไฟ] 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด"
		},

		damage: 10,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card