import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "搬運小匠",
		th: "ด็อคโคเรอร์"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "如果搬運小匠可以搬起自己體重３倍左右的木材，就代表牠進化的日子要到了。",
		th: "ด็อคโคเรอร์ที่เริ่มยกท่อนไม้สี่เหลี่ยมขนาดประมาณ 3 เท่าของตัวเองได้ ก็ใกล้ถึงวันที่ตัวเองจะวิวัฒนาการ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊",
			th: "ปัด"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card