import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "比克提尼VMAX",
		th: "วิคทินีVMAX"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 310,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "火焰鋪展",
			th: "ไฟลุกลาม"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多3張【火】能量卡，以任意方式附於自己的寶可夢身上。",
			th: "เลือกการ์ดพลังงาน [ไฟ] ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา แล้วติดที่โปเกมอนฝ่ายเราตามชอบ"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "極巨勝利",
			th: "ไดวิคทอรี่"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加120點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็น [โปเกมอน【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		},

		damage: "100+",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card