import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "แกรนบูล",
		'id-id': "Granbull"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'th-th': "เป็นที่นิยมในหมู่สาว ๆ แต่นอกจากจะขี้ขลาดแล้วยังละเอียดอ่อน จึงใช้เป็นหมาเฝ้าบ้านไม่ได้",
		'id-id': "Walaupun populer di antara gadis muda, Granbull tidak berbakat sebagai anjing penjaga karena Pokémon ini penakut dan sensitif."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ตั้งใจสู้",
			'id-id': "Menentang"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'th-th': "ไวลด์แท็กเกิล",
			'id-id': "Wild Tackle"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 160,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card