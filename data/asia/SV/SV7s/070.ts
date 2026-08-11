import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คาระคาระ",
		'id-id': "Cubone"
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'th-th': "พอร้องไห้คิดถึงแม่ที่เสียชีวิตไป เสียงร้องอย่างน่าเศร้าใจก็จะก้องอยู่ในกระดูกที่ครอบอยู่บนหัว",
		'id-id': "Ketika Cubone menangis karena teringat pada induknya yang telah dipisahkan oleh maut, suara tangisnya menggema dengan sedih di dalam tengkorak yang dikenakan di kepalanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ประจัญบาน",
			'id-id': "Menyerang"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card