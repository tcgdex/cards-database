import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨蔓藤",
		th: "โมจัมโบ"
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'zh-tw': "最近的研究發現，牠這雙能夠自由伸縮的手臂其實 是由成束的藤蔓形成的。",
		th: "จากงานวิจัยล่าสุดพบว่า แขน 2 ข้างที่ยืดยาวได้อย่างอิสระนั้น ที่จริงแล้วคือเถาวัลย์ที่มัดติดกันอยู่นั่นเอง"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "吸附青藤",
			th: "เถาวัลย์ยึดติด"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "頭突",
			th: "ตบหนัก"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card