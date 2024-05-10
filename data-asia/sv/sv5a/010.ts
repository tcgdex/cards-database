import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ロコン",
		'zh-tw': "六尾",
		th: "โรคอน"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "温かい ６本の 尻尾は 体が 育つごとに 毛並みが 良くなり 美しく なっていく。",
		'zh-tw': "隨著身體的成長， 溫暖的６根尾巴的 毛髮也會變得更漂亮。",
		th: "ขนของหางทั้ง 6 ที่แสนอบอุ่นนั้นจะค่อย ๆ เรียงสวยขึ้นและงดงามยิ่งขึ้นเมื่อร่างกายของมันเติบใหญ่"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "ひだね",
			'zh-tw': "火種",
			th: "เชื้อไฟ"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card