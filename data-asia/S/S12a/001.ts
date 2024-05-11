import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "派拉斯",
		th: "พารัส",
		ja: "パラス"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "控制蟲子的是一種叫做冬蟲夏草的蕈類。 蟲子的意志會被忽視。",
		th: "เห็ดที่ชื่อโทจูคะโซจะคอยบงการแมลง โดยไม่สนใจความต้องการของแมลง",
		ja: "冬虫夏草と いう キノコが 虫を 操っているのだ。 虫の 意思は 無視される。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸取",
			th: "ดูดซับ",
			ja: "すいとる"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「10」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]",
			ja: "このポケモンのHPを「10」回復する。"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [46]
}

export default card