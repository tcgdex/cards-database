import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "เมลาร์วา",
		id: "Larvesta"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		th: "เคยถูกเรียกว่าตัวอ่อนแมลงที่ขโมยพระอาทิตย์ไป ไฟที่พ่นออกมาจากเขาสามารถเผาได้กระทั่งแผ่นเหล็ก",
		id: "Larvesta dikenal sebagai larva pencuri matahari. Api yang dikeluarkan dari tanduknya dapat memotong pelat besi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ไฟ",
			id: "Api"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			th: "พุ่งเข้าใส่",
			id: "Menerjang"
		},

		effect: {
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
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