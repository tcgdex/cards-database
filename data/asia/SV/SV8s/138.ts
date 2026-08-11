import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Appletun",
		'th-th': "ทารุปเปิล"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'id-id': "Appletun mengusir Lechonk yang datang untuk menjilat madu manis di punggungnya dengan memuntahkan nektar lengket.",
		'th-th': "ไล่กูร์ตงที่จะมากินน้ำหวานบนกลางหลังโดยการพ่นน้ำหวาน เหนียวหนืดใส่"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Sweet Melt",
			'th-th': "สวีตเมลต์"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan.",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Wild Tackle",
			'th-th': "ไวลด์แท็กเกิล"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 20.",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย"
		},

		damage: 130,
		cost: ["Grass", "Fire"]
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card