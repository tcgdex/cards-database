import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฟ้าคะนองคลั่ง",
		'id-id': "Raging Bolt"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		'th-th': "ว่ากันว่า มันจะเผารอบ ๆ ให้เป็นจุณด้วยสายฟ้าที่ปล่อยออกมาจากขนตามร่างกาย ไม่มีใครรู้รายละเอียดเกี่ยวกับมัน",
		'id-id': "Konon ia membakar habis sekeliling dengan petir yang dilepaskan dari bulu tubuhnya. Rinciannya tidak diketahui."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "พายุสายฟ้าฟาด",
			'id-id': "Badai Sambaran Petir"
		},

		effect: {
			'th-th': "ทำแดเมจกับโปเกมอนฝ่ายตรงข้าม 1 ตัว เท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้ x30 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini memberikan kerusakan sejumlah 30 kepada 1 Pokémon lawan untuk tiap Energi yang dikenakan pada Pokémon ini. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Lightning", "Fighting"]
	}, {
		name: {
			'th-th': "หัวมังกร",
			'id-id': "Sundulan Naga"
		},

		damage: 130,
		cost: ["Lightning", "Fighting", "Colorless"]
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card