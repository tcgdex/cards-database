import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เมลาร์วา",
		'id-id': "Larvesta"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'th-th': "เคยถูกเรียกว่าตัวอ่อนแมลงที่ขโมยพระอาทิตย์ไป ไฟที่พ่นออกมาจากเขาสามารถเผาได้กระทั่งแผ่นเหล็ก",
		'id-id': "Larvesta dikenal sebagai larva pencuri matahari. Api yang dikeluarkan dari tanduknya dapat memotong pelat besi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ไฟ",
			'id-id': "Api"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			'th-th': "พุ่งเข้าใส่",
			'id-id': "Menerjang"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 40,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card