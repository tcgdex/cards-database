import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "มาวิป",
		'id-id': "Alcremie"
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'th-th': "ครีมที่ได้จากมาวิปที่ได้รับการเอาใจใส่นั้นเลิศรสมาก จึงมีแต่เทรนเนอร์ที่คอยดูแลเอาใจใส่มันเป็นอย่างดี",
		'id-id': "Dikarenakan Alcremie yang dirawat secara baik mengeluarkan krim yang sangat luar biasa, kebanyakan pelatih merawatnya dengan penuh kelembutan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ขนมหลากสีสัน",
			'id-id': "Makanan Manis Aneka Warna"
		},

		effect: {
			'th-th': "เลือกการ์ดโปเกมอนที่เป็นประเภทเดียวกับพลังงานพื้นฐานที่ติดอยู่กับโปเกมอนนี้รวมกันได้สูงสุด 5 ใบ จากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak total 5 lembar Pokémon yang memiliki tipe yang sama dengan Energi Dasar yang dikenakan pada Pokémon ini dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "เมจิคัลช็อต",
			'id-id': "Magical Shot"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card