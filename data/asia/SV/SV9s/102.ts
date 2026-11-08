import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อาร์เมอร์การ์ <ของฮ็อป>",
		'id-id': "Corviknight <Hop>"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		'th-th': "ปีกส่วนหนึ่งกลายเป็นเหล็กกล้า แม้ปีกจะหนักแต่ก็บินไปมาบนฟ้ากว้าง ได้สบาย ๆ",
		'id-id': "Sebagian bulu Corviknight berubah menjadi baja. Pokémon ini terbang mengelilingi langit luas dengan lihai tanpa mempermasalahkan sayapnya yang berat."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'th-th': "แทงทะลุ",
			'id-id': "Menusuk Tembus"
		},

		effect: {
			'th-th': "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 50 ด้วย {โปเกมอน บนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini juga memberikan kerusakan sejumlah 50 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ปีกเหล็ก",
			'id-id': "Sayap Baja"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-60]",
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 60."
		},

		damage: 150,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card