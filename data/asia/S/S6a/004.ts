import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蟲寶包"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "會用葉子做衣服，因此在服裝設計師之間作為吉祥物而廣受歡迎。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "嚼草"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的【草】能量，將其丟棄。"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card