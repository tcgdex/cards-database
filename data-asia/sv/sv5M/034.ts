import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蝶結萌虻",
		th: "อบูริบง"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "用花粉和花蜜製作團子。依調配的種類和劑量不同， 團子的效果也不一樣。",
		th: "ปั้นขนมดังโงะจากละอองเกสรดอกไม้และน้ำหวาน ผลลัพธ์จะแตกต่างกันออกไปขึ้นอยู่กับปริมาณและชนิดที่ผสม"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "多餘花粉",
			th: "ละอองเกสรส่วนเกิน"
		},

		effect: {
			'zh-tw': "在下個自己的回合，受到這個招式的寶可夢【昏厥】時，多獲得2張獎賞卡。",
			th: "เทิร์นถัดไปของฝ่ายเรา เมื่อโปเกมอนที่ได้รับท่าต่อสู้นี้[หมดสภาพ]แล้ว หยิบการ์ดรางวัลเพิ่ม 2 ใบ"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card