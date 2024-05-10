import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "เพอร์ม็อต",
		id: "Pawmot"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		th: "ปกติจะสงบนิ่ง แต่เมื่อถึงคราวต้องสู้ก็จะเอาชนะศัตรูด้วยท่วงท่าที่รวดเร็วปานสายฟ้าแลบ",
		id: "Biasanya ia bersikap tenang, namun saat bertarung, Pawmot akan menghabisi lawannya secepat kilat."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "มัคโบลต์",
			id: "Mach Bolt"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			th: "หมัดไฟฟ้า",
			id: "Electric Fist"
		},

		effect: {
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 60 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 60 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 100,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card