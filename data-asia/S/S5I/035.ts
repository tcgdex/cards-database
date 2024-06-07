import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨石丁",
		th: "อิชิเฮนจิน"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "每年會有一天，牠們會在特定的時間突然出現，聚集在一起排成一個圈。",
		th: "ในวันและเวลาที่กำหนดไว้เฉพาะในปีละหนึ่งครั้ง จะปรากฏตัวออกมาจากที่ไหนสักแห่งและรวมตัวเรียงกันเป็นวงกลม"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "大地鼓動",
			th: "เสียงหัวใจแห่งธรณี"
		},

		effect: {
			'zh-tw': "若場上有競技場卡，則增加30點傷害。",
			th: "ถ้ามีการ์ดสเตเดียมอยู่บนกระดาน การโจมตีนี้จะเพิ่มแดเมจอีก 30"
		},

		damage: "30+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "兆幅鐵錘",
			th: "กิก้าแฮมเมอร์"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「兆幅鐵錘」。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [กิก้าแฮมเมอร์] ไม่ได้"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card