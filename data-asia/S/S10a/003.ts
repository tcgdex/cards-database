import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		th: "ฮิซุย มารุมายน์V",
		'zh-tw': "洗翠 頑皮雷彈V"
	},

	illustrator: "5bansd Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			th: "ระเบิดหัวร้อน",
			'zh-tw': "煩躁炸彈"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนสภาวะผิดปกติที่โปเกมอนนี้ได้รับอยู่ x100",
			'zh-tw': "造成這隻寶可夢處於特殊狀態的數量×100點傷害。"
		},

		damage: "100×"
	}, {
		name: {
			th: "โซลาร์ชูต",
			'zh-tw': "日光射擊"
		},

		effect: {
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。"
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
