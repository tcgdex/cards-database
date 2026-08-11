import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เมทากรอส",
		'id-id': "Metagross"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	description: {
		'th-th': "เวลาบินจะพับขาทั้ง 4 ของมันไว้ ว่ากันว่าสมองทั้ง 4 ของมันนั้น เยี่ยมยอดกว่าซูเปอร์คอมพิวเตอร์",
		'id-id': "Ia melipat 4 kakinya lalu terbang. Dikatakan bahwa 4 otaknya lebih unggul daripada superkomputer sekalipun."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'th-th': "ทุบแหลก",
			'id-id': "Pukul Hancur"
		},

		damage: 60,
		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "จอยต์บีม",
			'id-id': "Joint Beam"
		},

		effect: {
			'th-th': "ถ้าบนเบนช์ฝ่ายเรามี [ดันบัล] [เมแทงก์] อยู่ การโจมตีนี้จะเพิ่มแดเมจ อีก 150",
			'id-id': "Jika ada Beldum dan Metang di Cadangan sendiri, kerusakan yang diberikan bertambah sejumlah 150."
		},

		damage: "130+",
		cost: ["Psychic", "Psychic"]
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
	regulationMark: "I"
}

export default card