import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ทามาเกะทาเคะ",
		'id-id': "Foongus"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'th-th': "มีข้อสันนิษฐานว่าผู้คิดค้นมอนสเตอร์บอลนั้นชื่นชอบทามาเกะทาเคะ แต่ความจริงเป็นอย่างไรไม่มีใครรู้",
		'id-id': "Ada teori yang mengatakan pengembang Bola Pokémon menyukai Foongus, namun kebenarannya tidak diketahui."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ล่อด้วยลาย",
			'id-id': "Pola Pemancing"
		},

		effect: {
			'th-th': "เลือกการ์ดโปเกมอน[พื้นฐาน]ประเภท[หญ้า] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			'id-id': "Pilih 1 lembar Pokémon Basic tipe {Daun} dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Grass"]
	}, {
		name: {
			'th-th': "ตี",
			'id-id': "Menghantam"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card