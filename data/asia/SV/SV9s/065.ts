import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "แมมมูex",
		'id-id': "Mamoswine ex"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "แมมมอธแครี",
			'id-id': "Mammoth Carry"
		},

		effect: {
			'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ด ฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			'th-th': "เดินแถวกัมปนาท",
			'id-id': "Barisan Membahana"
		},

		effect: {
			'th-th': "แดเมจจะเพิ่มตามจำนวนโปเกมอน[ร่าง2] บนเบนช์ฝ่ายเรา x40",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 40 untuk tiap Pokémon Stage 2 di Cadangan sendiri."
		},

		damage: "180+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I"
}

export default card