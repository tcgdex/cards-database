import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蘑蘑菇",
		th: "คิโนโคโค"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "一察覺到危險，就會從頭頂散播出毒孢子 來保護自身安全的寶可夢。",
		th: "โปเกมอนที่พอรู้สึกได้ถึงอันตราย จะปล่อยสปอร์พิษออกมาจากบนหัวเพื่อปกป้องตัวเอง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "二連頭錘",
			th: "พุ่งหัวชนสองครั้ง"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10"
		},

		damage: "10×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "種子炸彈",
			th: "ระเบิดเมล็ดพืช"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card