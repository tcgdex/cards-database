import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蘭螳花",
		th: "รารันเทส"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "斬斷敵人的動作就像是跳舞一般。優雅的姿態使得牠被稱為最豔麗的草屬性寶可夢。",
		th: "เชือดเฉือนศัตรูด้วยการเต้นรำ จากรูปร่างที่งามสง่านี้ทำให้ถูกเรียกว่าเป็นโปเกมอนหญ้าที่มีเสน่ห์เย้ายวนที่สุด"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "綠葉吸取",
			th: "ลีฟเดรน"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "日光刀",
			th: "โซลาร์คัตเตอร์"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card