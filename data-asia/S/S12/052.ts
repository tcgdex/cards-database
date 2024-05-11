import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頑皮熊貓",
		th: "ยันชัม"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "會模仿自己敬為頭領的流氓熊貓，向牠學習戰鬥 及捕捉獵物的方法。",
		th: "การเลียนแบบโกรอนดะที่เป็นลูกพี่จะทำให้เรียนรู้วิธีการต่อสู้หรือวิธีการจับเหยื่อได้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈打",
			th: "สับ"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card