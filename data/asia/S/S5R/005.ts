import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "櫻花寶",
		th: "เชอรินโบ"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "身體越紅的櫻花寶含有的營養越豐富，味道也很甜很好吃。",
		th: "เชอรินโบตัวที่มีสีแดงจะยิ่งมีสารอาหารสูง ลูกกลม ๆ ของมันก็หวานและอร่อยมาก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "樹葉",
			th: "ใบไม้"
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