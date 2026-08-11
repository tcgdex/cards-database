import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คิววะวา <ของลิเลีย>",
		'id-id': "Comfey <Lillie>"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'th-th': "ใช้เถาวัลย์เด็ดดอกไม้ ดอกไม้ที่ติดอยู่ตามตัวของมันจะเริ่มมีคุณสมบัติ ในการเยียวยารักษา",
		'id-id': "Ia memetik bunga menggunakan sulurnya. Muncul efek pemulihan dari bunga yang dipasang ke tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เรียกดอกไม้",
			'id-id': "Memanggil Bunga"
		},

		effect: {
			'th-th': "เลือกการ์ด [โปเกมอนของลิเลีย] ที่เป็นโปเกมอน[พื้นฐาน]จากสำรับการ์ดฝ่ายเรา ตามจำนวนที่ชอบ วางบนเบนช์ แล้วสับสำรับการ์ด",
			'id-id': "Pilih sesukanya Pokémon Lillie yang merupakan Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "หายวับ",
			'id-id': "Menghilang Mendadak"
		},

		effect: {
			'th-th': "นำโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ กลับขึ้นมือ",
			'id-id': "Kembalikan Pokémon ini dan semua kartu yang dikenakannya ke Kartu Pegangan."
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card