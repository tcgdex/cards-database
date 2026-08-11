import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Registeel",
		'th-th': "เรจิสตีล"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'id-id': "Registeel terbuat dari material misterius yang elastis sehingga dapat memanjang dan memendek, tetapi juga lebih keras dari logam apa pun.",
		'th-th': "สร้างขึ้นจากวัสดุประหลาดที่แข็งแกร่งยิ่งกว่าโลหะชนิดใด แต่ก็มีความ อ่อนตัวที่ยืดหดได้ด้วยเช่นกัน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Raging Hammer",
			'th-th': "เรจจิงแฮมเมอร์"
		},

		effect: {
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini.",
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10"
		},

		damage: "60+",
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card