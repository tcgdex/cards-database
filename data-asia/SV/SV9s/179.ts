import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โซโรอาร์คex ของ N",
		id: "Zoroark <N> ex"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "แลกเปลี่ยน",
			id: "Transaksi"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา ถ้าทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ด ใช้ได้ 1 ครั้ง จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika membuang 1 lembar Kartu Pegangan sendiri ke Trash. Ambil 2 kartu dari atas Deck sendiri."
		}
	}],

	attacks: [{
		name: {
			th: "ไนท์โจ๊กเกอร์",
			id: "Night Joker"
		},

		effect: {
			th: "เลือกท่าต่อสู้ที่ [โปเกมอนของ N] บนเบนช์ฝ่ายเรามี 1 ท่า ใช้เป็นท่าต่อสู้นี้ได้",
			id: "Pilih 1 serangan yang dimiliki Pokémon N di Cadangan sendiri, lalu gunakan sebagai serangan ini."
		},

		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	suffix: "EX"
}

export default card