import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คาร์โบ",
		'id-id': "Charcadet"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'th-th': "เป็นโปเกมอนที่เกิดจากถ่านไม้ที่ลุกไหม้ มีจิตวิญญาณการต่อสู้ที่เร่าร้อน กล้าเผชิญหน้าแม้กับศัตรูที่แข็งแกร่ง",
		'id-id': "Jiwa bersemayam ke dalam arang terbakar, lalu berubah menjadi Pokémon. Dengan semangat bertarung yang membara, Charcadet menantang pertarungan meskipun dengan lawan yang kuat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ทุบตี",
			'id-id': "Memukul"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "เผาไหม้",
			'id-id': "Lidah Api"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card