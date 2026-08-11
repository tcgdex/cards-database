import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Xerneas",
		th: "เซอเนียส"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		id: "Dikatakan bahwa Xerneas membagikan kehidupan abadi. Ia tidur selama 1000 tahun dalam wujud pohon, lalu bangkit kembali.",
		th: "ว่ากันว่าสามารถแบ่งชีวิตที่เป็นนิรันดร์ให้ผู้อื่นได้ หลังจากหลับอยู่ใน ร่างต้นไม้มานาน 1000 ปี ก็คืนชีพขึ้นใหม่อีกครั้ง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Aurora Gain",
			th: "ออโรราเกน"
		},

		effect: {
			id: "Pulihkan HP Pokémon ini sejumlah 30.",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			id: "Giga Impact",
			th: "กิก้าอิมแพกต์"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 130,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card