import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โวลเคเนียนex",
		'id-id': "Volcanion ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "ไอน้ำเผาไหม้",
			'id-id': "Uap Pembakar Melekat"
		},

		effect: {
			'th-th': "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ทำให้โปเกมอน บนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		}
	}],

	attacks: [{
		name: {
			'th-th': "ฮีทไซโคลน",
			'id-id': "Heat Cyclone"
		},

		effect: {
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์",
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu pindahkan ke Pokémon Cadangan."
		},

		damage: 160,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card