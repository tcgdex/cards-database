import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Ninetales",
		th: "คิวคอน"
	},

	illustrator: "Kamome Shirahama",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		id: "Ia memiliki bulu yang berkilau keemasan dan 9 ekor yang panjang. Dikatakan bahwa ia hidup selama 1000 tahun.",
		th: "มีขนที่เปล่งประกายสีทองและหางยาว 9 หาง ว่ากันว่ามีอายุถึง 1000 ปี"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Roh Api",
			th: "ดวงวิญญาณไฟ"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอน บนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		damage: 50,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card