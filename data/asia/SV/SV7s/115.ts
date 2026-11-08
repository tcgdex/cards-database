import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "บริดิวรัส",
		'id-id': "Archaludon"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		'th-th': "ขุดรูในภูเขาเพื่อหาอาหาร มันทนทานมาก แม้จะติดอยู่ในอุโมงค์ถล่มก็ไม่สะเทือน",
		'id-id': "Pokémon yang mencari makan dengan menggali lubang di dalam gunung. Ia tangguh sehingga terlibat longsor sekalipun bukanlah masalah baginya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "สะพานเชื่อมเหล็กกล้า",
			'id-id': "Jembatan Penghubung Baja"
		},

		effect: {
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนฝ่ายเราทุกตัวที่มีพลังงาน[โลหะ]ติดอยู่ ทั้งหมดจะหายไป",
			'id-id': "Selama Pokémon ini ada di Arena, semua Pokémon sendiri yang mengenakan Energi {Logam} menjadi tidak membutuhkan Energi untuk Mundur."
		}
	}],

	attacks: [{
		name: {
			'th-th': "ไอออนบลัสเตอร์",
			'id-id': "Iron Blaster"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 160,
		cost: ["Metal", "Metal", "Colorless"]
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