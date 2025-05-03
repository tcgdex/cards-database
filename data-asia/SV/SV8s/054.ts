import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Chien-Pao",
		th: "เป้าเจี้ยน"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		id: "Chien-Pao adalah kebencian orang-orang yang meninggal oleh pedang pada zaman dahulu. Ia menyelimuti dirinya dengan salju, lalu berubah menjadi Pokémon.",
		th: "ความชิงชังของผู้ที่ลาโลกไปด้วยคมดาบเมื่อนานมาแล้ว ถูกห่อหุ้มด้วย หิมะ จนกลายเป็นโปเกมอน"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tenggelamkan Dalam Salju",
			th: "จมหิมะ"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Buang Stadium yang ada di Arena ke Trash.",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง ทิ้งการ์ด สเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	attacks: [{
		name: {
			id: "Icycle Loop",
			th: "วงแหวนแท่งน้ำแข็ง"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu kembalikan ke Kartu Pegangan.",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก นำกลับขึ้นมือ"
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