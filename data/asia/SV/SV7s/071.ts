import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "การะการะ",
		'id-id': "Marowak"
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'th-th': "เมื่อผ่านพ้นความเศร้าโศกไปแล้วก็จะวิวัฒนาการจนกล้าแกร่งขึ้น ใช้กระดูกเป็นอาวุธต่อสู้กับศัตรูอย่างกล้าหาญ",
		'id-id': "Telah mengatasi kesedihannya dan berevolusi menjadi Pokémon yang tangguh. Marowak menghadapi musuh dengan gagah berani menggunakan tulang sebagai senjatanya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "เสียงร้อง",
			'id-id': "Bersuara"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนที่ได้รับท่าต่อสู้นี้ใช้ จะถูก [-40]",
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon yang menerima serangan ini berkurang sejumlah 40."
		},

		cost: ["Fighting"]
	}, {
		name: {
			'th-th': "กระดูกแก้แค้น",
			'id-id': "Balas Dendam Tulang"
		},

		effect: {
			'th-th': "ถ้า [คาระคาระ] บนเบนช์ฝ่ายเรามีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			'id-id': "Jika Cubone di Cadangan sendiri memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card