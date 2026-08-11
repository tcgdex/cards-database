import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Archaludon ex",
		'th-th': "บริดิวรัสex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Konstruksi Aloi",
			'th-th': "อัลลอยบิลด์"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih paling banyak 2 lembar Energi Dasar {Logam} dari Trash sendiri, lalu kenakan sesukanya pada Pokémon {Logam} sendiri.",
			'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกการ์ด [พลังงานพื้นฐาน[โลหะ]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอน[โลหะ]ฝ่ายเราตามชอบ"
		}
	}],

	attacks: [{
		name: {
			'id-id': "Metal Defender",
			'th-th': "เมทัลดีเฟนเดอร์"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, Pokémon ini menjadi tidak memiliki Kelemahan.",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม จุดอ่อนของโปเกมอนนี้ ทั้งหมดจะหายไป"
		},

		damage: 220,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card