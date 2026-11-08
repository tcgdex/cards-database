import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Durant ex",
		'th-th': "ไอแอนท์ex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Mengikis Tiba-tiba",
			'th-th': "ขูดออกฉับพลัน"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Buang 1 kartu dari atas Deck lawan ke Trash.",
			'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	attacks: [{
		name: {
			'id-id': "Revenge Crush",
			'th-th': "รีเวนจ์แครช"
		},

		effect: {
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap lembar Kartu Point yang telah diambil lawan.",
			'th-th': "แดเมจจะเพิ่มตามจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว x30"
		},

		damage: "120+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card