import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "มัสคิปปา",
		'id-id': "Carnivine"
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'th-th': "ล่อเหยื่อด้วยน้ำลายที่มีกลิ่นหวาน แล้วอ้าปากกว้างงับเข้าไป จะใช้เวลา 1 วันเต็ม ๆ เพื่อกินเหยื่อ",
		'id-id': "Carnivine memikat mangsa dengan air liurnya yang beraroma manis, lalu melahap mangsa dengan rahang besarnya. Menggunakan waktu sehari penuh untuk memakan mangsanya sampai habis."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "แอบหยิบกิน",
			'id-id': "Mencocol Makanan"
		},

		effect: {
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [40]",
			'id-id': "Pulihkan HP Pokémon ini sejumlah 40."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "แผ่ปกคลุม",
			'id-id': "Menyelungkupi"
		},

		effect: {
			'th-th': "แดเมจของท่าต่อสู้นี้จะลดลง ตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			'id-id': "Kerusakan akibat serangan ini berkurang sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "130-",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card