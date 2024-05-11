import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風鈴鈴",
		th: "ชิรีน"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "擁有超音波的叫聲。輕飄飄地浮起來，乘著風旅行到遠方。",
		th: "มีเสียงร้องที่มีคลื่นเสียงความถี่สูง ลอยปลิวไปตามลม เดินทางท่องเที่ยวระยะทางไกล"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "小使者",
			th: "งานเล็กน้อย"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงานพื้นฐานจากสำรับการ์ดฝ่ายเราได้สูงสุด 2 ใบ ให้ฝ่ายตรงข้ามดู แล้วนำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "溫柔音色",
			th: "เสียงอ่อนโยน"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ【หลับ】"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card