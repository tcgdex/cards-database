import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Koraidon",
		'th-th': "โคไรดอน"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'id-id': "Kabarnya, identitas asli Winged King yang membelah tanah dengan tinjunya seperti yang tertulis dalam jurnal ekspedisi kuno adalah Koraidon.",
		'th-th': "ดูเหมือนว่าจะเป็นร่างที่แท้จริงของราชาแห่งปีกที่ในบันทึกการสำรวจ เก่ากล่าวว่ามันเคยแยกแผ่นดินด้วยกำปั้น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Serangan Menggebu Bergelombang",
			'th-th': "บุกกระหน่ำเป็นระลอก"
		},

		effect: {
			'id-id': "Jika pada giliran sendiri sebelumnya, Pokémon Purba selain Pokémon ini telah menggunakan serangan, kerusakan yang diberikan bertambah sejumlah 150.",
			'th-th': "เทิร์นก่อนของฝ่ายเรา ถ้าโปเกมอน [โบราณ] ที่นอกเหนือจากโปเกมอนนี้ใช้ ท่าต่อสู้ไปแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 150"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Hantaman Penuh Tenaga",
			'th-th': "ตบหนัก"
		},

		damage: 110,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card