import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怪力V",
		th: "ไคริกีV"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "復仇光炮",
			th: "รีเวนจ์บัสเตอร์"
		},

		effect: {
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加50點傷害。",
			th: "ถ้าโปเกมอนบนเบนช์ฝ่ายเรามีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 50"
		},

		damage: "50+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "地球上投",
			th: "ขว้างใส่โลก"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card