import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小炭仔",
		th: "ทันด้ง"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "在滿是岩石的崎嶇路面上也能像獨輪車那樣自在移動。靠燃燒煤炭維持生命。",
		th: "วิ่งไปมาเหมือนจักรยานล้อเดียวตามทางขรุขระที่มีแต่โขดหินได้อย่างไม่มีปัญหา มีชีวิตอยู่ได้ด้วยการเผาถ่านหิน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "突擊",
			th: "ประจัญบาน"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 10 ด้วย"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card