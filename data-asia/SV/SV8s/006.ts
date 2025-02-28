import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Spewpa",
		th: "โคฟูไร"
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		id: "Spewpa tidak memiliki tempat tinggal yang tetap. Pokémon ini berjalan mengelilingi padang dan gunung mengikuti kata hatinya, mengumpulkan energi untuk berevolusi.",
		th: "ไม่มีที่อยู่อาศัยที่แน่นอน เดินวนไปมาตามป่าเขาตามใจชอบ คอยสะสม พลังงานสำหรับวิวัฒนาการ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Jalan Berkeliling",
			th: "เดินวน"
		},

		effect: {
			id: "Tukar Pokémon ini dengan Pokémon Cadangan.",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Serudukan",
			th: "พุ่งเข้าชน"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card