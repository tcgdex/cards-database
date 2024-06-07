import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		th: "พารัส",
		'zh-tw': "派拉斯"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		th: "เห็ดที่ชื่อโทจูคะโซจะคอยบงการแมลง โดยไม่สนใจความต้องการของแมลง",
		'zh-tw': "控制蟲子的是一種叫做冬蟲夏草的蕈類。蟲子的意志會被忽視。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ดูดซับ",
			'zh-tw': "吸取"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]",
			'zh-tw': "將這隻寶可夢恢復「10」HP。"
		},

		damage: 20,
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