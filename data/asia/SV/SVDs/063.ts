import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "ไทไคเด็น",
		id: "Kilowattrel"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		th: "พองถุงคอเพื่อเพิ่มกระแสไฟฟ้า โบยบินตามสายลมเป็นระยะทาง 700 กิโลเมตรในหนึ่งวัน",
		id: "Kilowattrel menggembungkan kantong tenggorokannya dan menambahkan daya listriknya. Pokémon ini menaiki angin dan terbang sejauh 700 km dalam sehari."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "บินพุ่งชน",
			id: "Terbang Linear"
		},

		effect: {
			th: "ทำแดเมจ 50 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini memberikan kerusakan sejumlah 50 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "ธันเดอร์บลาสต์",
			id: "Thunder Blast"
		},

		effect: {
			th: "เลือกพลังงาน[สายฟ้า]ที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 1 Energi {Listrik} yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 140,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card