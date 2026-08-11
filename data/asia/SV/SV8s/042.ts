import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Sealeo",
		'th-th': "โทดอกเกลอร์"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'id-id': "Sealeo hidup di atas es hanyut. Sambil berenang, Pokémon ini mencium bau mangsa, menemukan, dan menangkapnya.",
		'th-th': "ใช้ชีวิตอยู่บนธารน้ำแข็ง ดมกลิ่นคัดแยกเหยื่อระหว่างว่ายน้ำ ตามหา จนเจอและจับมัน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Mendorong Jatuh",
			'th-th': "พุ่งชน"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'id-id': "Ice Ball",
			'th-th': "บอลน้ำแข็ง"
		},

		damage: 60,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card