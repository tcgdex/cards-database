import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大炭車",
		th: "โทร็อกกอน"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "能透過高速旋轉自己的腳，以３０公里的時速奔跑。能噴出攝氏１０００度的火焰。",
		th: "วิ่งได้ 30 กิโลเมตรต่อชั่วโมงโดยหมุนขาด้วยความเร็วสูง พ่นไฟร้อนสูงถึง 1000 องศาเซลเซียส"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "狂野衝撞",
			th: "ไวลด์แทคเคิล"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 10 ด้วย"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card