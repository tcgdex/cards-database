import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "เก็คโคกะex",
		id: "Greninja ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			th: "ดาวกระจายซ่อนเร้น",
			id: "Syuriken Gaib"
		},

		effect: {
			th: "ทำแดเมจ 40 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini memberikan kerusakan sejumlah 40 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "ตัดน้ำเชี่ยว",
			id: "Sabetan Arus Deras"
		},

		effect: {
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			id: "Jika Pokémon Bertarung lawan memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "120+",
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card