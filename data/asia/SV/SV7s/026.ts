import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เอสเบิร์นex",
		'id-id': "Cinderace ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "แฟลร์สไตรค์",
			'id-id': "Flare Strike"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [แฟลร์สไตรค์] ไม่ได้",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Flare Strike."
		},

		damage: 280,
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "การ์เนตวอลเลย์",
			'id-id': "Garnet Volley"
		},

		effect: {
			'th-th': "ทำแดเมจ 180 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini memberikan kerusakan sejumlah 180 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Fire", "Fighting", "Darkness"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card