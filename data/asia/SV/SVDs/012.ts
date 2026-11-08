import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โอลีวา",
		'id-id': "Arboliva"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'th-th': "อ่อนโยนและมีความเมตตาต่อผู้อื่นเป็นอย่างมาก จะแบ่งน้ำมันที่อร่อยและมีสารอาหารเปี่ยมล้นให้กับโปเกมอนที่อ่อนแอ",
		'id-id': "Sifatnya tenang dan sangat penyayang. Arboliva memberikan minyak bernutrisi nan lezat kepada Pokémon yang melemah."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'th-th': "ผลไม้แห่งการรักษา",
			'id-id': "Buah Penyembuh"
		},

		effect: {
			'th-th': "ฟื้นฟู HP ทั้งหมดของโปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว",
			'id-id': "Pulihkan HP 1 Pokémon Cadangan sendiri sepenuhnya."
		},

		cost: ["Grass"]
	}, {
		name: {
			'th-th': "ออยล์ช็อต",
			'id-id': "Oil Shot"
		},

		damage: 90,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card