import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Vigoroth",
		th: "ยารุคิโมโนะ"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		id: "Vigoroth segera merasa lapar karena ia selalu mengamuk, tetapi Pokémon ini tidak bisa diam meskipun sedang makan.",
		th: "อาละวาดตลอดเวลาเลยมักจะหิว แต่ตอนกินก็อยู่นิ่ง ๆ ไม่เป็น"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Cakar Penebas",
			th: "สแลชคลอว์"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card