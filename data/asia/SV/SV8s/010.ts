import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Dhelmise",
		th: "ดาดาริน"
	},

	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		id: "Dhelmise adalah ganggang yang mengambang di dasar laut, menempel dan mengambil alih bagian dari kapal karam, lalu terlahir kembali sebagai Pokémon hantu.",
		th: "เศษสาหร่ายที่ลอยอยู่ก้นทะเลนำพาชิ้นส่วนของซากเรือจมเข้ามารวม กันแล้วเกิดใหม่เป็นโปเกมอนผี"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Rescue Anchor",
			th: "เรสคิวแองเคอร์"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Pokémon dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan.",
			th: "เลือกการ์ดโปเกมอนได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่าย ตรงข้ามดู นำขึ้นมือ"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Jangkar Penghancur",
			th: "สมอแห่งการทำลาย"
		},

		effect: {
			id: "Sebelum memberikan kerusakan, buang Pokémon Tool yang dikenakan pada Pokémon Bertarung lawan ke Trash.",
			th: "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนตำแหน่ง ต่อสู้ฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 80,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card