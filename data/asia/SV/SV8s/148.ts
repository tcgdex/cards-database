import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Rufflet",
		'th-th': "วาชิบอน"
	},

	illustrator: "Nakamura Ippan",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'id-id': "Rufflet mencengkeram mangsanya dengan cakar tajamnya dan mematuk mereka. Pokémon ini juga memakan buah beri, namun pada dasarnya ia adalah karnivor.",
		'th-th': "ใช้กรงเล็บคมแทงแล้วจิกเหยื่อ โดยพื้นฐานแล้วเป็นโปเกมอนกินเนื้อ แต่ผลไม้ก็ทาน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mengepak",
			'th-th': "ตีปีก"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
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
	regulationMark: "H"
}

export default card