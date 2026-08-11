import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "จูไนเปอร์ex",
		'id-id': "Decidueye ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "อิสรเสรี",
			'id-id': "Segala Arah"
		},

		effect: {
			'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา สลับโปเกมอนนี้ที่อยู่บนเบนช์ กับโปเกมอนบนตำแหน่งต่อสู้ หรือ สลับโปเกมอนนี้ที่อยู่บนตำแหน่งต่อสู้ กับโปเกมอนบนเบนช์",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Tukar Pokémon ini yang ada di Cadangan dengan Pokémon Bertarung. Atau tukar Pokémon ini yang ada di Arena Bertarung dengan Pokémon Cadangan."
		}
	}],

	attacks: [{
		name: {
			'th-th': "ฮันติงแอร์โรว์",
			'id-id': "Hunting Arrow"
		},

		effect: {
			'th-th': "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 130,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card