import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cetoddle",
		'th-th': "อารุคุจิระ"
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'id-id': "Cetoddle hidup dan membentuk kelompok dengan jumlah sekitar 5 ekor di daerah yang dingin. Pokémon ini sangat menyukai mineral yang terkandung pada salju dan es.",
		'th-th': "อาศัยอยู่เป็นฝูงประมาณ 5 ตัวในบริเวณที่มีอากาศหนาวเหน็บ ชอบ แร่ธาตุที่มีอยู่ในหิมะและน้ำแข็งเป็นอย่างมาก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Drain Fin",
			'th-th': "เดรนฟิน"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah 20.",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [20]"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card