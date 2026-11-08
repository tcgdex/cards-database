import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Landorus",
		'th-th': "แลนโดลอส"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'id-id': "Tempat-tempat yang dikunjungi oleh Landorus menghasilkan panen yang melimpah sehingga Pokémon ini disebut sebagai Dewa Ladang.",
		'th-th': "แผ่นดินที่แลนโดลอสไปเยือนจะเกิดผลผลิตมากมาย จึงถูกเรียกว่าเป็น เทพแห่งไร่สวน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tinju Tenaga Dalam",
			'th-th': "กำปั้นฮึดสู้"
		},

		effect: {
			'id-id': "Pilih 1 lembar Energi dari Trash sendiri, lalu kenakan pada Pokémon ini.",
			'th-th': "เลือกการ์ดพลังงาน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Buster Swing",
			'th-th': "บัสเตอร์สวิง"
		},

		effect: {
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi.",
			'th-th': "แดเมจของท่าต่อสู้นี้จะไม่นำความต้านทานมาคิด"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card