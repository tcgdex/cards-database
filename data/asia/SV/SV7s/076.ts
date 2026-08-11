import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ชาเรมex",
		id: "Medicham ex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			th: "กดจุดลมปราณ",
			id: "Totokan Tenaga Dalam"
		},

		effect: {
			th: "วางตัวนับแดเมจให้ HP ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเหลือเท่ากับ [50]",
			id: "Letakkan Token Kerusakan hingga sisa HP Pokémon Bertarung lawan menjadi sejumlah 50."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "ลูกเตะโยคะ",
			id: "Yoga Kick"
		},

		effect: {
			th: "แดเมจของท่าต่อสู้นี้จะไม่นำจุดอ่อนและความต้านทานมาคิด",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan dan Resistansi."
		},

		damage: 190,
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