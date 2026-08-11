import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คิววะวา",
		id: "Comfey"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		th: "เมื่อมีดอกไม้ติดตามตัวจะดีใจจนปลดปล่อยพลังในการเยียวยารักษาออกมา ชื่นชอบพื้นที่ที่มีดอกไม้จำนวนมาก",
		id: "Ketika ia mengenakan bunga, ia menjadi senang sehingga ia akan mengeluarkan efek penyembuh. Pokémon yang menyukai daerah berbunga banyak."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ฟลาวเวอร์ชาวเวอร์",
			id: "Flower Shower"
		},

		effect: {
			th: "ผู้เล่นทั้งสองฝ่าย แต่ละฝ่ายจั่วการ์ด 3 ใบจากสำรับการ์ด",
			id: "Kedua pemain masing-masing mengambil 3 kartu dari atas Deck."
		},

		cost: ["Psychic"]
	}, {
		name: {
			th: "คลอเคลีย",
			id: "Main Kasar"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
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