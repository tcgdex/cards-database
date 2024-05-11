import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夢幻VMAX",
		th: "มิวVMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "交錯匯流",
			th: "ครอสฟิวชัน"
		},

		effect: {
			'zh-tw': "選擇自己的備戰區的「匯流」寶可夢持有的1個招式，作為這個招式使用。",
			th: "เลือกท่าต่อสู้ที่โปเกมอน บนเบนช์ฝ่ายเรามี 1 ท่า ใช้เป็นท่าต่อสู้นี้ได้"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "極巨奇跡",
			th: "ไดมิราเคิล"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			th: "ไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคำนวณแดเมจของท่าต่อสู้นี้"
		},

		damage: 130,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card