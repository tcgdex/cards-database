import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "บูล",
		'id-id': "Snubbull"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'th-th': "ขี้ขลาดผิดกับลักษณะภายนอก เมื่ออยู่กับโปเกมอนลูกหมาตัวอื่น ๆ แล้ว บางครั้งก็ถูกรังแก",
		'id-id': "Berbeda dengan penampilannya, Snubbull sebenarnya penakut. Akibatnya ketika dikelompokkan bersama Pokémon anak anjing lainnya, kadang Pokémon ini akan digojlok oleh yang lain."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "แทะ",
			'id-id': "Menggerogot"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "กระแทกสุดแรง",
			'id-id': "Serudukan Nekat"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card