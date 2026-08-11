import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ไทเรสึ",
		id: "Falinks"
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		th: "ตัวหัวหน้าที่เรียกว่าหัวหน้าทหารจะใช้เขาซึ่งสามารถยืดหดได้ในการออกคำสั่งเพื่อจัดกระบวนทัพ",
		id: "Pemimpin Falinks yang disebut juga sebagai kapten memberikan instruksi untuk mengganti formasi dengan tanduknya yang memanjang dan memendek."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "จัดแถว",
			id: "Menyusun Formasi"
		},

		effect: {
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 2 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "โจมตีพร้อมกันหมด",
			id: "Serbuan Serempak"
		},

		effect: {
			th: "เทิร์นก่อนของฝ่ายเรา ถ้าโปเกมอนนี้ใช้ [จัดแถว] ไปแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			id: "Jika pada giliran sendiri sebelumnya, Pokémon ini telah menggunakan Menyusun Formasi, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card