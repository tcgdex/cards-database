import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ซาไดจา <ของฮ็อป>",
		'id-id': "Sandaconda <Hop>"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'th-th': "ยืดและหดร่างกายอย่างสุดกำลังเพื่อพ่นทรายด้วยความแรงที่สามารถ พัดได้กระทั่งรถบรรทุกเทท้าย",
		'id-id': "Sandaconda berkontraksi dan meregang semaksimal mungkin dan menyemburkan pasir yang kekuatannya dapat menggulingkan truk jungkit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "พสุธากัมปนาท",
			'id-id': "Gelegar Tanah"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'th-th': "กราวนด์เบรก",
			'id-id': "Ground Break"
		},

		effect: {
			'th-th': "โปเกมอนบนเบนช์ฝ่ายเราทุกตัว ก็จะได้รับแดเมจตัวละ 20 ด้วย {โปเกมอน บนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini juga memberikan kerusakan masing-masing sejumlah 20 kepada semua Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 140,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card