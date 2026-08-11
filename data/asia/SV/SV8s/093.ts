import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Flutter Mane",
		'th-th': "เกศากระพือ"
	},

	illustrator: "Ebila",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'id-id': "Pokémon yang memiliki karakteristik yang mirip dengan makhluk hidup bernama Flutter Mane yang disebutkan dalam suatu buku.",
		'th-th': "โปเกมอนที่มีลักษณะเด่นเหมือนกับสิ่งมีชีวิตที่เรียกว่าเกศากระพือที่ ปรากฏตัวในบันทึกเล่มหนึ่ง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mengecoh Memindahkan",
			'th-th': "หลอกย้าย"
		},

		effect: {
			'id-id': "Pilih 1 Pokémon Purba di Cadangan sendiri, lalu pindahkan semua Token Kerusakan yang dimiliki Pokémon yang telah dipilih ke Pokémon Bertarung lawan.",
			'th-th': "เลือกโปเกมอน [โบราณ] บนเบนช์ฝ่ายเรา 1 ตัว ย้ายตัวนับแดเมจที่วางอยู่ บนโปเกมอนที่เลือกทั้งหมด ไปวางที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Moon Force",
			'th-th': "มูนฟอร์ซ"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon yang menerima serangan ini berkurang sejumlah 30.",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนที่ได้รับท่าต่อสู้ นี้ใช้จะถูก [-30]"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card