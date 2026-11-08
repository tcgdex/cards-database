import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฮิฮิดารุมะ <ของ N>",
		'id-id': "Darmanitan <N>"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'th-th': "ยิ่งเปลวไฟในร่างกายลุกโพลง พลังก็จะยิ่งเพิ่มสูงขึ้น อุณหภูมินั้นอาจ สูงเกิน 1400 องศาเซลเซียส",
		'id-id': "Makin besar nyala api dalam tubuh Darmanitan, makin meningkat pula kekuatannya. Suhunya dapat melampaui 1400 ℃."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "แบ็กดราฟต์",
			'id-id': "Backdraft"
		},

		effect: {
			'th-th': "แดเมจจะเท่ากับจำนวนการ์ดพลังงานพื้นฐานที่อยู่บนตำแหน่งทิ้งการ์ดฝ่าย ตรงข้าม x30",
			'id-id': "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lembar Energi Dasar yang ada di Trash lawan."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "ปืนใหญ่โหมไหม้",
			'id-id': "Meriam Bakar Lapis Api"
		},

		effect: {
			'th-th': "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด โปเกมอนบนเบนช์ ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 90 ด้วย {โปเกมอนบนเบนช์จะไม่นำ จุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash, serangan ini juga memberikan kerusakan sejumlah 90 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card