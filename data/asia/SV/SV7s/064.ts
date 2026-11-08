import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คิววะวา",
		'id-id': "Comfey"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'th-th': "เมื่อมีดอกไม้ติดตามตัวจะดีใจจนปลดปล่อยพลังในการเยียวยารักษาออกมา ชื่นชอบพื้นที่ที่มีดอกไม้จำนวนมาก",
		'id-id': "Ketika ia mengenakan bunga, ia menjadi senang sehingga ia akan mengeluarkan efek penyembuh. Pokémon yang menyukai daerah berbunga banyak."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ฟลาวเวอร์ชาวเวอร์",
			'id-id': "Flower Shower"
		},

		effect: {
			'th-th': "ผู้เล่นทั้งสองฝ่าย แต่ละฝ่ายจั่วการ์ด 3 ใบจากสำรับการ์ด",
			'id-id': "Kedua pemain masing-masing mengambil 3 kartu dari atas Deck."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "คลอเคลีย",
			'id-id': "Main Kasar"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		},

		damage: "20+",
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