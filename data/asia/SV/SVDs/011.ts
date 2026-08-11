import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โอลีเนียว",
		'id-id': "Dolliv"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'th-th': "จะแบ่งน้ำมันแสนอร่อยที่มีกลิ่นหอมสดใหม่ให้ อาศัยอยู่ร่วมกับมนุษย์มาตั้งแต่อดีตกาล",
		'id-id': "Dolliv membagikan minyak lezat beraroma segar. Pokémon ini telah hidup bersama manusia sejak zaman dahulu."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "สายลมพระอาทิตย์",
			'id-id': "Angin Surya"
		},

		effect: {
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			'id-id': "Pulihkan HP Pokémon ini sejumlah 30."
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card