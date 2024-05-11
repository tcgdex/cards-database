import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小貓怪",
		th: "โคลิงก์"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "能利用肌肉的伸縮來產生電流。當牠全身都在抖動時， 就代表牠正在激烈地發電。",
		th: "ผลิตไฟฟ้าโดยการเกร็งกล้ามเนื้อ การที่ตัวสั่นสู้นั้นแสดงว่ากำลังผลิตไฟฟ้าที่รุนแรงอยู่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電流攻擊",
			th: "ช็อตไฟฟ้า"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 10 ด้วย"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card