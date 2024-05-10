import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "เคนเทารอส",
		id: "Tauros"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		th: "เมื่อเล็งเหยื่อ จะใช้หางตีตัวเองพร้อมกับพุ่งตรงเข้าไป",
		id: "Begitu menentukan sasarannya, Tauros mencambuk tubuhnya sendiri menggunakan ekornya dan menerjang lurus ke depan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "รวบรวมฝูง",
			id: "Mengumpulkan Gerombolan"
		},

		effect: {
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "พิโรธ",
			id: "Amarah"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card