import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ฟูวาไรด์",
		id: "Drifblim"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		th: "ช่วยแบกคนและโปเกมอน แต่จะลอยไปตามลม ก็เลยไม่สามารถเลือกจุดหมายปลายทางได้",
		id: "Drifblim terbang mengangkut manusia dan Pokémon. Namun, tidak dapat menentukan tujuan yang jelas karena ia hanya terbang dibawa angin."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ระเบิดไปด้วยกัน",
			id: "Meledak Bersama"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวน [ฟูวันเต] และ [ฟูวาไรด์] บนกระดานฝ่ายเรา x50 [ฟูวันเต] และ [ฟูวาไรด์] บนกระดานฝ่ายเราทุกตัว ก็จะได้รับแดเมจตัวละ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini memberikan kerusakan sejumlah 50 untuk tiap Drifloon dan Drifblim di Arena sendiri. Serangan ini juga memberikan kerusakan masing-masing sejumlah 30 kepada semua Drifloon dan Drifblim di Arena sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: "50×",
		cost: ["Psychic"]
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