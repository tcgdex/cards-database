import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ลูกาลูกัน",
		id: "Lycanroc"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		th: "ใช้เขี้ยวเล็บแหลมคมโจมตีเหยื่อ จะทำตามคำสั่งของเทรนเนอร์ที่ เชื่อใจอย่างซื่อสัตย์"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "คลุมด้วยหนาม",
			id: "Mengenakan Duri"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกการ์ด [สไปก์เอนเนอร์จี้] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih paling banyak 2 lembar Energi Duri dari Trash sendiri, lalu kenakan pada Pokémon ini."
		}
	}],

	attacks: [{
		name: {
			th: "คลัตช์แฟงก์",
			id: "Clutch Fang"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้าม x40",
			id: "Kerusakan yang diberikan bertambah sejumlah 40 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "40+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card