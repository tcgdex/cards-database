import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ลูกาลูกัน",
		'id-id': "Lycanroc"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'th-th': "ใช้เขี้ยวเล็บแหลมคมโจมตีเหยื่อ จะทำตามคำสั่งของเทรนเนอร์ที่ เชื่อใจอย่างซื่อสัตย์",
		'id-id': "Lycanroc menyerang mangsa dengan cakar dan taring tajamnya. Pokémon ini selalu patuh terhadap perintah pelatih yang ia percayai."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "คลุมด้วยหนาม",
			'id-id': "Mengenakan Duri"
		},

		effect: {
			'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกการ์ด [สไปก์เอนเนอร์จี้] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih paling banyak 2 lembar Energi Duri dari Trash sendiri, lalu kenakan pada Pokémon ini."
		}
	}],

	attacks: [{
		name: {
			'th-th': "คลัตช์แฟงก์",
			'id-id': "Clutch Fang"
		},

		effect: {
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้าม x40",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 40 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
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