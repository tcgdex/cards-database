import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "กุเร็นอาร์มา",
		'id-id': "Armarouge"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'th-th': "ร่างที่วิวัฒนาการด้วยชุดเกราะของนักรบที่สร้างผลงานมามากมาย เป็นโปเกมอนที่มีความจงรักภักดีมาก",
		'id-id': "Wujud evolusi dari Charcadet menjadi Armarouge berkat zirah milik pendekar yang memenangkan banyak pertarungan. Pokémon yang sangat setia."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "เกราะร้อนระอุ",
			'id-id': "Zirah Berpijar"
		},

		effect: {
			'th-th': "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม ทำให้โปเกมอนที่ใช้ท่าต่อสู้เป็นสภาวะ[ไหม้]",
			'id-id': "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, ubah kondisi Pokémon yang telah menggunakan serangan menjadi Luka Bakar."
		}
	}],

	attacks: [{
		name: {
			'th-th': "ปืนใหญ่ระเบิดร้อน",
			'id-id': "Meriam Ledakan Panas"
		},

		damage: 70,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card