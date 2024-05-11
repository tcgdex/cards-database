import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 蔥遊兵",
		th: "กาลาร์ เนงิกะไนท์"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "會用堅硬的蔥葉抵擋攻擊，接著用鋒利的莖反擊。牠的蔥既是武器也是食材。",
		th: "ปัดป้องการจู่โจมด้วยใบแข็งของต้นหอมและโจมตีกลับด้วยลำต้นที่แหลมคม ต้นหอมนี้เป็นทั้งอาวุธและอาหาร"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "啄",
			th: "จิก"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "蔥之強襲",
			th: "โจมตีด้วยต้นหอม"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有「寶可夢道具」，則增加90點傷害。這個情況下，這個招式的傷害不計算抵抗力。",
			th: "ถ้าโปเกมอนนี้มี [ไอเท็มติดโปเกมอน] ติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 90 เมื่อทำเช่นนั้นแล้ว แดเมจของท่าต่อสู้นี้จะไม่นำความต้านทานมาคิด"
		},

		damage: "70+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card