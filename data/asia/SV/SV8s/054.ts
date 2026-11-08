import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Chien-Pao",
		'th-th': "เป้าเจี้ยน"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'id-id': "Chien-Pao adalah kebencian orang-orang yang meninggal oleh pedang pada zaman dahulu. Ia menyelimuti dirinya dengan salju, lalu berubah menjadi Pokémon.",
		'th-th': "ความชิงชังของผู้ที่ลาโลกไปด้วยคมดาบเมื่อนานมาแล้ว ถูกห่อหุ้มด้วย หิมะ จนกลายเป็นโปเกมอน"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Tenggelamkan Dalam Salju",
			'th-th': "จมหิมะ"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Buang Stadium yang ada di Arena ke Trash.",
			'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง ทิ้งการ์ด สเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	attacks: [{
		name: {
			'id-id': "Icycle Loop",
			'th-th': "วงแหวนแท่งน้ำแข็ง"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu kembalikan ke Kartu Pegangan.",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก นำกลับขึ้นมือ"
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card