import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "ไคริวex",
		id: "Dragonite ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			th: "โจมตีด้วยปีก",
			id: "Pukulan Sayap"
		},

		damage: 70,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ดาวตกทำลาย",
			id: "Meteor Pemecah"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 140 ถ้าออกก้อย เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 140. Jika hasilnya sisi belakang, pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: "140+",
		cost: ["Water", "Lightning"]
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card