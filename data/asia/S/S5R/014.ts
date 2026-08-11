import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔蟻獸",
		th: "คุยทาแรน"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "將火焰當成舌頭來使用。會一點一點地熔化鐵蟻堅硬的外骨骼，然後把牠吃掉。",
		th: "ใช้เปลวไฟเหมือนกับเป็นลิ้น ค่อย ๆ ละลายโครงกระดูกส่วนนอกแข็ง ๆ ของไอแอนท์แล้วสวาปาม"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火焰",
			th: "ไฟ"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "舔舔燃燒",
			th: "เผาไหม้ลามเลีย"
		},

		effect: {
			'zh-tw': "擲2次硬幣，選擇與正面出現的次數相同數量的對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			th: "ทอยเหรียญ 2 ครั้ง ทิ้งพลังงานที่ติดกับโปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามตามจำนวนครั้งที่ออกหัวที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card