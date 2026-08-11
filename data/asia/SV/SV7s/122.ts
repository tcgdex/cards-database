import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ฟ้าคะนองคลั่ง",
		id: "Raging Bolt"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		th: "ว่ากันว่า มันจะเผารอบ ๆ ให้เป็นจุณด้วยสายฟ้าที่ปล่อยออกมาจากขนตามร่างกาย ไม่มีใครรู้รายละเอียดเกี่ยวกับมัน",
		id: "Konon ia membakar habis sekeliling dengan petir yang dilepaskan dari bulu tubuhnya. Rinciannya tidak diketahui."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "พายุสายฟ้าฟาด",
			id: "Badai Sambaran Petir"
		},

		effect: {
			th: "ทำแดเมจกับโปเกมอนฝ่ายตรงข้าม 1 ตัว เท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้ x30 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini memberikan kerusakan sejumlah 30 kepada 1 Pokémon lawan untuk tiap Energi yang dikenakan pada Pokémon ini. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Lightning", "Fighting"]
	}, {
		name: {
			th: "หัวมังกร",
			id: "Sundulan Naga"
		},

		damage: 130,
		cost: ["Lightning", "Fighting", "Colorless"]
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card