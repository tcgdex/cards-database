import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪沙那",
		th: "อาซานัน"
	},

	illustrator: "Natsumi Miyanose",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "用冥想提高精神能量後，就可以浮在空中。 １天會吃下１個樹果。",
		th: "นั่งสมาธิเพื่อขัดเกลาพลังจิตให้เพิ่มขึ้นและลอยขึ้นกลางอากาศ จะกินผลไม้แค่ 1 ผลต่อวัน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "巴掌",
			th: "ตบ"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "踢",
			th: "เตะ"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card