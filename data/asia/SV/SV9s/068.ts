import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เรจิร็อก",
		'id-id': "Regirock"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'th-th': "แม้จะใช้เทคโนโลยีทางวิทยาศาสตร์ใหม่ล่าสุดเข้าสำรวจร่างหินผานั้น ก็ไม่สามารถหาสมองหรือหัวใจพบได้",
		'id-id': "Menggunakan teknologi ilmiah terbaru, dilakukan pemeriksaan atas tubuh batu Regirock, tetapi otak dan jantung Pokémon ini tidak dapat ditemukan."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "เกราะหิน",
			'id-id': "Zirah Batu"
		},

		effect: {
			'th-th': "ถ้าโปเกมอนนี้มีพลังงานติดอยู่ แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			'id-id': "Jika Pokémon ini mengenakan Energi, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}],

	attacks: [{
		name: {
			'th-th': "บัสเตอร์แลเรียท",
			'id-id': "Buster Lariat"
		},

		effect: {
			'th-th': "แดเมจของท่าต่อสู้นี้จะไม่นำความต้านทานมาคิด",
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi."
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card