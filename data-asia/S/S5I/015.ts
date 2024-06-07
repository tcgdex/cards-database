import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電擊獸",
		th: "เอเลบู"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "人們經常把停電的原因歸咎到牠們身上，但其實大多是電力公司的過失。",
		th: "มักถูกมองว่าเป็นต้นเหตุของการเกิดไฟดับอยู่บ่อย ๆ แต่ความจริงแล้วส่วนใหญ่เป็นเพราะความผิดพลาดของบริษัทไฟฟ้า"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "揮大拳",
			th: "หมัดหนัก"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「揮大拳」。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [หมัดหนัก] ไม่ได้"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card