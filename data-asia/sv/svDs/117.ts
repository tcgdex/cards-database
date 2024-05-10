import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "คาโมเนกิ",
		id: "Farfetch'd"
	},

	illustrator: "KG-2000",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		th: "ใช้ลำต้นของพืชในการต่อสู้ มีสไตล์การฟาดฟันด้วยลำต้นที่เหมือนกับวิชาต่อสู้หลายรูปแบบ",
		id: "Farfetch'd bertarung menggunakan batang tumbuhan. Terdapat beberapa aliran terkait cara mengayunkan batang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "แบกขึ้นหลัง",
			id: "Memanggul"
		},

		effect: {
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Ambil 2 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "หวดด้วยต้นหอม",
			id: "Daun Bawang Penghajar"
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