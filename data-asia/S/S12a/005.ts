import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 頑皮雷彈V",
		th: "ฮิซุย มารุมายน์V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "煩躁炸彈",
			th: "ระเบิดหัวร้อน"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢處於特殊狀態的數量×100點傷害。",
			th: "แดเมจจะเท่ากับจำนวนสภาวะผิดปกติที่โปเกมอนนี้ได้รับอยู่ x100"
		},

		damage: "100×"
	}, {
		name: {
			'zh-tw': "日光射擊",
			th: "โซลาร์ชูต"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。",
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 120,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card