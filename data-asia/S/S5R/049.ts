import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "列陣兵",
		th: "ไทเรสึ"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "６隻為一體的寶可夢。慣於團隊行動，會一邊變換陣形一邊戰鬥。",
		th: "โปเกมอน 6 ตัวรวมกันเป็น 1 ตัว เปลี่ยนรูปแบบการเรียงแถวไปพลางต่อสู้กันเป็นทีมเวิร์ก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連擊之陣",
			th: "กองพลจู่โจมต่อเนื่อง"
		},

		effect: {
			'zh-tw': "造成自己的場上「連擊」寶可夢的數量×20點傷害。",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอน บนกระดานฝ่ายเรา x20"
		},

		damage: "20×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card