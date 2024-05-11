import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "刺球仙人掌",
		th: "ซาโบเนีย"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "喜歡沙漠等嚴酷環境。能靠體內儲存的水分存活３０天。",
		th: "ชอบอยู่ในสภาพแวดล้อมที่โหดร้าย เช่น ทะเลทราย น้ำที่สะสมในร่างกายสามารถหล่อเลี้ยงชีวิตให้อยู่ได้ 30 วัน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "刺痛",
			th: "ต่อย"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "敲擊",
			th: "ตี"
		},

		damage: 20,
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