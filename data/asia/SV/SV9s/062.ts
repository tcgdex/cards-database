import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "คิววะวา <ของลิเลีย>",
		id: "Comfey <Lillie>"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		th: "ใช้เถาวัลย์เด็ดดอกไม้ ดอกไม้ที่ติดอยู่ตามตัวของมันจะเริ่มมีคุณสมบัติ ในการเยียวยารักษา",
		id: "Ia memetik bunga menggunakan sulurnya. Muncul efek pemulihan dari bunga yang dipasang ke tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เรียกดอกไม้",
			id: "Memanggil Bunga"
		},

		effect: {
			th: "เลือกการ์ด [โปเกมอนของลิเลีย] ที่เป็นโปเกมอน[พื้นฐาน]จากสำรับการ์ดฝ่ายเรา ตามจำนวนที่ชอบ วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Pilih sesukanya Pokémon Lillie yang merupakan Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "หายวับ",
			id: "Menghilang Mendadak"
		},

		effect: {
			th: "นำโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ กลับขึ้นมือ",
			id: "Kembalikan Pokémon ini dan semua kartu yang dikenakannya ke Kartu Pegangan."
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