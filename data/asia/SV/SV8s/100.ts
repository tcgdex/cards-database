import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Donphan",
		'th-th': "ดอนแฟน"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'id-id': "Biasanya selalu bersikap tenang. Tetapi, jika Donphan marah, ia akan membulatkan badannya, kemudian bergelinding menabrak lawan.",
		'th-th': "ปกติจะรักสงบ แต่ถ้าโกรธขึ้นมาจะม้วนตัวกลมแล้วกลิ้งชน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Memukul Roboh",
			'th-th': "ตีให้ยับ"
		},

		effect: {
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan.",
			'th-th': "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้ามมาคิด"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Guard Rolling",
			'th-th': "การ์ดโรลลิง"
		},

		effect: {
			'id-id': "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash. Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 100.",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด เทิร์นถัดไป ของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-100]"
		},

		damage: 120,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card