import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噗噗豬",
		th: "บูพิก"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "能用黑珍珠增強自己的精神力量。會用奇異的舞步操縱對手的心。",
		th: "ขยายพลังจิตให้ใหญ่ขึ้นด้วยไข่มุกดำ ควบคุมจิตของฝ่ายตรงข้ามด้วยสเต็ปการเต้นแปลก ๆ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "眩目舞",
			th: "ระบำพิศวง"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [สับสน]"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "力量寶石",
			th: "พาวเวอร์เจม"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card