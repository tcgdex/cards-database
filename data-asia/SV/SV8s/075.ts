import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Latios",
		th: "ลาทิโอส"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		id: "Pokémon yang memiliki kecerdasan tinggi. Jika ia melipat lengannya dan terbang, kecepatannya melampaui pesawat jet.",
		th: "โปเกมอนที่มีสติปัญญาสูง เมื่อหุบแขนแล้วบินไปจะมีความเร็วที่สามารถ แซงเครื่องบินเจ็ทได้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Terbang Linear",
			th: "บินพุ่งชน"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 50 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "ทำแดเมจ 50 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำ จุดอ่อนและความต้านทานมาคิด}"
		},

		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			id: "Jet Head",
			th: "เจ็ตเฮด"
		},

		damage: 110,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card