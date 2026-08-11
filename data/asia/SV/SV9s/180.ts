import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ซาเชียนex ของฮ็อป",
		id: "Zacian <Hop> ex"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			th: "ฟันพริบตา",
			id: "Sabetan Momen"
		},

		effect: {
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอน บนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			th: "เบรฟสแลช",
			id: "Brave Slash"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [เบรฟสแลช] ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Brave Slash."
		},

		damage: 240,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "I",
	suffix: "EX"
}

export default card