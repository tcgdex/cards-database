import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "อาซานัน",
		id: "Meditite"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		th: "นั่งสมาธิเพื่อขัดเกลาพลังจิตให้เพิ่มขึ้นและลอยขึ้นกลางอากาศ จะกินผลไม้แค่ 1 ผลต่อวัน",
		id: "Meditite meningkatkan energi jiwanya dengan bermeditasi, lalu melayang di udara. Pokémon ini memakan 1 buah beri per harinya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เข้าฌาน",
			id: "Meditasi"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [20]",
			id: "Pulihkan HP Pokémon ini sejumlah 20."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "สับ",
			id: "Chop"
		},

		damage: 50,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card