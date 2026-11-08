import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คาโมเนกิ",
		'id-id': "Farfetch'd"
	},

	illustrator: "KG-2000",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'th-th': "ใช้ลำต้นของพืชในการต่อสู้ มีสไตล์การฟาดฟันด้วยลำต้นที่เหมือนกับวิชาต่อสู้หลายรูปแบบ",
		'id-id': "Farfetch'd bertarung menggunakan batang tumbuhan. Terdapat beberapa aliran terkait cara mengayunkan batang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "แบกขึ้นหลัง",
			'id-id': "Memanggul"
		},

		effect: {
			'th-th': "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Ambil 2 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "หวดด้วยต้นหอม",
			'id-id': "Daun Bawang Penghajar"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card