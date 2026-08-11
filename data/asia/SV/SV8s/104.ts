import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gastrodon",
		'th-th': "ไทรโทดอน"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'id-id': "Gastrodon muncul di pantai batu yang dangkal. Ketika berhasil menangkap mangsa, Pokémon ini melelehkannya secara perlahan dengan lendirnya, lalu menyeruputnya.",
		'th-th': "ปรากฏตัวตามแนวโขดหินน้ำตื้น พอจับเหยื่อได้จะค่อย ๆ ใช้เมือก ละลายแล้วซดเข้าไป"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Pengikat Lekat",
			'th-th': "มัดติดแน่น"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Cadangan, Pokémon Stage 2 di Cadangan kedua pemain menjadi tidak memiliki Ability.",
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่บนเบนช์ ความสามารถของโปเกมอน[ร่าง2] บนเบนช์ ของทั้งสองฝ่าย ทั้งหมดจะหายไป"
		}
	}],

	attacks: [{
		name: {
			'id-id': "Mud Shot",
			'th-th': "มัดช็อต"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card