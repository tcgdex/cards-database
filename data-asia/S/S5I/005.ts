import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "粉蝶蛹",
		th: "โคฟูไร"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "堅硬的身體即使是鳥寶可夢的鳥嘴也無法傷之分毫。四處撒粉進行防守。",
		th: "ร่างกายที่แข็งทำให้จะงอยของโปเกมอนนกทำอะไรไม่ได้ จะโปรยผงออกมาป้องกันตัว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "草藏",
			th: "ซ่อนในหญ้า"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「40」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [40]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "蟲咬",
			th: "แมลงกัด"
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card