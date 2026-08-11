import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อิวาพาเลซ",
		'id-id': "Crustle"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'th-th': "เล็บอันหนานั้นเป็นอาวุธที่แข็งแกร่งที่สุด แข็งถึงขนาดทำให้กระดอง หุ้มหลังของโดไซดอนเป็นรอยร้าวได้"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "บ้านก้อนหินลึกลับ",
			'id-id': "Penginapan Batu Mistis"
		},

		effect: {
			'th-th': "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จาก [โปเกมอน【ex】] ฝ่ายตรงข้าม",
			'id-id': "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon {ex} lawan."
		}
	}],

	attacks: [{
		name: {
			'th-th': "เกรทซิสเซอร์",
			'id-id': "Great Scissor"
		},

		effect: {
			'th-th': "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้ามมาคิด",
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card