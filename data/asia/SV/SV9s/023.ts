import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "แกลล็อป",
		'id-id': "Rapidash"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'th-th': "ตัวที่วิ่งเร็วที่สุดจะเป็นจ่าฝูง จ่าฝูงจะเป็นผู้กำหนดจุดหมายรวมถึง ความเร็วในการวิ่งของฝูง",
		'id-id': "Rapidash tercepatlah yang menjadi pemimpin di kelompoknya. Pemimpin menentukan tempat tujuan dan kecepatan lari kelompok."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "เร่งฝีเท้า",
			'id-id': "Kaki Bergegas"
		},

		effect: {
			'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Ambil 1 kartu dari atas Deck sendiri."
		}
	}],

	attacks: [{
		name: {
			'th-th': "แผงคอไฟ",
			'id-id': "Surai Api"
		},

		damage: 60,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card