import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Shroodle",
		'th-th': "ชิรุชูลู"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'id-id': "Agar musuh tidak mendekati wilayah teritorialnya, Shroodle melukis tanda menggunakan cairan beracun yang mengeluarkan bau ekstrem di sekitar sarangnya.",
		'th-th': "วาดรูปรอบ ๆ รังด้วยของเหลวพิษที่มีกลิ่นฉุนเพื่อไม่ให้ศัตรูเข้าใกล้ อาณาเขต"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menyemprotkan Getah",
			'th-th': "ฉีดพ่นน้ำ"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card