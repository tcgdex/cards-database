import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เทปโปโอ",
		id: "Remoraid"
	},

	illustrator: "Minahamu",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		th: "ใช้ครีบหลังที่แปลงรูปเป็นเหมือนปุ่มดูดเกาะติดแมนไทน์ เพื่อรอรับของ ที่กินเหลือ",
		id: "Remoraid menggunakan sirip punggungnya yang berubah menjadi semacam pengisap untuk menempel di tubuh Mantine dan mendapatkan sisa makanan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กระเสือกกระสน",
			id: "Berontak"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			id: "Serangan ini memberikan kerusakan sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "10×",
		cost: ["Water"]
	}, {
		name: {
			th: "สาดน้ำ",
			id: "Guyuran Air"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card