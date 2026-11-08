import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Dedenne",
		'th-th': "เดเด็นเนะ"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'id-id': "Dedenne memancarkan sinyal dari kumis di pipinya dan berkomunikasi dengan kawannya. Pokémon ini membulat dan tertidur jika listriknya berkurang.",
		'th-th': "ปล่อยคลื่นไฟฟ้าจากหนวดที่แก้มเพื่อติดต่อสื่อสารกับพวกพ้อง พอไฟฟ้า ลดลงจะนอนขดตัวกลม"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Sonar Elektromagnetik",
			'th-th': "โซนาร์แม่เหล็กไฟฟ้า"
		},

		effect: {
			'id-id': "Pilih 1 lembar Trainer dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan.",
			'th-th': "เลือกการ์ดเทรนเนอร์ 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Menggerogot",
			'th-th': "แทะ"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card