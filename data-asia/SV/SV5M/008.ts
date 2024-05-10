import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "四季鹿",
		th: "ชิคิจิกะ"
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "隨著季節，氣味也會有變化。這個樣子的四季鹿散發的氣味 香甜濃郁，會持續蔓延在鼻內。",
		th: "กลิ่นของชิคิจิกะจะเปลี่ยนไปตามฤดูกาล ชิคิจิกะในร่างนี้จะมีกลิ่นหวานนวลติดจมูก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "活蹦亂跳",
			th: "สะบัดตัว"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "落葉衝撞",
			th: "ใบไม้ร่วงกระแทก"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的【草】能量，將其丟棄。",
			th: "เลือกพลังงาน[หญ้า]ที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card