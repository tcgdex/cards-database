import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "บูล",
		id: "Snubbull"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		th: "ขี้ขลาดผิดกับลักษณะภายนอก เมื่ออยู่กับโปเกมอนลูกหมาตัวอื่น ๆ แล้ว บางครั้งก็ถูกรังแก",
		id: "Berbeda dengan penampilannya, Snubbull sebenarnya penakut. Akibatnya ketika dikelompokkan bersama Pokémon anak anjing lainnya, kadang Pokémon ini akan digojlok oleh yang lain."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "แทะ",
			id: "Menggerogot"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			th: "กระแทกสุดแรง",
			id: "Serudukan Nekat"
		},

		effect: {
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
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