import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Appletun",
		th: "ทารุปเปิล"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		id: "Appletun mengusir Lechonk yang datang untuk menjilat madu manis di punggungnya dengan memuntahkan nektar lengket.",
		th: "ไล่กูร์ตงที่จะมากินน้ำหวานบนกลางหลังโดยการพ่นน้ำหวาน เหนียวหนืดใส่"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Sweet Melt",
			th: "สวีตเมลต์"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Wild Tackle",
			th: "ไวลด์แท็กเกิล"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 20.",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย"
		},

		damage: 130,
		cost: ["Grass", "Fire"]
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card