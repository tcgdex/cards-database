import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Hydreigon ex",
		th: "ซาซันดราex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Crush Head",
			th: "แครชเฮด"
		},

		effect: {
			id: "Buang 3 kartu dari atas Deck lawan ke Trash.",
			th: "ทิ้งการ์ด 3 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 200,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			id: "Obsidian",
			th: "ออบซิเดียน"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan masing-masing sejumlah 130 kepada 2 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 2 ตัว ก็จะได้รับแดเมจตัวละ 130 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		damage: 130,
		cost: ["Psychic", "Darkness", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card