import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "มัสคิปปา",
		id: "Carnivine"
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		th: "ล่อเหยื่อด้วยน้ำลายที่มีกลิ่นหวาน แล้วอ้าปากกว้างงับเข้าไป จะใช้เวลา 1 วันเต็ม ๆ เพื่อกินเหยื่อ",
		id: "Carnivine memikat mangsa dengan air liurnya yang beraroma manis, lalu melahap mangsa dengan rahang besarnya. Menggunakan waktu sehari penuh untuk memakan mangsanya sampai habis."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "แอบหยิบกิน",
			id: "Mencocol Makanan"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [40]",
			id: "Pulihkan HP Pokémon ini sejumlah 40."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "แผ่ปกคลุม",
			id: "Menyelungkupi"
		},

		effect: {
			th: "แดเมจของท่าต่อสู้นี้จะลดลง ตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			id: "Kerusakan akibat serangan ini berkurang sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
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