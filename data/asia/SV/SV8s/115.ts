import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Zweilous",
		'th-th': "จิเฮด"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'id-id': "Dua kepala Zweilous memiliki selera yang berbeda. Kedua kepalanya menjadi kuat dengan saling bertarung tanpa meminjam kekuatan dari siapa pun.",
		'th-th': "หัวทั้งสองมีความชอบแตกต่างกัน 2 หัวสู้กันเองก็เลยแกร่งขึ้นได้โดย ไม่ต้องพึ่งพาใคร"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Meratakan Tanah",
			'th-th': "กระทืบ"
		},

		effect: {
			'id-id': "Buang 2 kartu dari atas Deck lawan ke Trash.",
			'th-th': "ทิ้งการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Taring Kegelapan",
			'th-th': "เขี้ยวแห่งความมืด"
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card