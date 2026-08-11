import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "วาตะชิรากะ",
		'id-id': "Eldegoss"
	},

	illustrator: "Yuka Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'th-th': "เมล็ดขนนุ่นมีสารอาหารเต็มเปี่ยม จะปล่อยนุ่นให้ลอยไปตามลมเพื่อทำให้ต้นไม้ใบหญ้าและเหล่าโปเกมอนร่าเริง",
		'id-id': "Biji di bulu kapas Eldegoss mengandung banyak nutrisi. Biji ini diterbangkan menggunakan angin untuk menyehatkan tanaman dan Pokémon lainnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ของขวัญจากสายลมอ่อน",
			'id-id': "Hadiah Angin Semilir"
		},

		effect: {
			'th-th': "นำโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดฝ่ายเรา หลังจากนั้น เลือกการ์ดที่ชอบได้สูงสุด 3 ใบจากสำรับการ์ด นำขึ้นมือ แล้วสับสำรับการ์ด",
			'id-id': "Kembalikan Pokémon ini dan semua kartu yang dikenakannya ke Deck sendiri. Setelah itu, pilih paling banyak 3 kartu sesukanya dari Deck, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ใบไม้",
			'id-id': "Dedaunan"
		},

		damage: 50,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card