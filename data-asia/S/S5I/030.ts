import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天蠍",
		th: "ไกลกา"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "會朝著獵物迎面飛來，然後趁著被纏上的獵物驚慌失措時刺入毒針。",
		th: "เล็งไปที่ใบหน้าแล้วบินเข้ามา จะแทงเข็มพิษเข้าไประหว่างที่เหยื่อถูกขึงติดไว้ตกใจ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈開",
			th: "ฟันแหลก"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card