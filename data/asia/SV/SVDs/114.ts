import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ไคริวex",
		'id-id': "Dragonite ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "โจมตีด้วยปีก",
			'id-id': "Pukulan Sayap"
		},

		damage: 70,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ดาวตกทำลาย",
			'id-id': "Meteor Pemecah"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 140 ถ้าออกก้อย เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 140. Jika hasilnya sisi belakang, pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: "140+",
		cost: ["Water", "Lightning"]
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card