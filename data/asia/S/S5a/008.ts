import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火焰雞VMAX",
		th: "บาชาโมVMAX"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "緊抓",
			th: "โฉบเหยื่อ"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะหนีไม่ได้"
		},

		damage: 60,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "極巨火焰",
			th: "ไดเบลซ"
		},

		effect: {
			'zh-tw': "選擇最多2隻自己的備戰區的「連擊」寶可夢，從自己的棄牌區附給那些寶可夢各1張能量卡。",
			th: "เลือกโปเกมอน บนเบนช์ฝ่ายเราได้สูงสุด 2 ตัว และติดการ์ดพลังงานจากตำแหน่งทิ้งการ์ดฝ่ายเราตัวละ 1 ใบ"
		},

		damage: 130,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card