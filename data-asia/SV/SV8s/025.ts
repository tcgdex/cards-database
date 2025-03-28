import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Volcarona",
		th: "อุลกามอธ"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		id: "Volcarona menyebarkan sisik berapinya. Habisnya pasokan oksigen di area sekitar itu lebih berbahaya dari pada udara panas membara yang ia sebabkan.",
		th: "โปรยเกล็ดปีกไฟรอบ ๆ สิ่งที่อันตรายกว่าความร้อนสูงของเกล็ดคือ การที่ออกซิเจนโดยรอบจะค่อย ๆ หายไป"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Mengisap Darah",
			th: "ดูดเลือด"
		},

		effect: {
			id: "Pulihkan HP Pokémon ini sejumlah kerusakan yang diberikan kepada Pokémon Bertarung lawan.",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ ตามจำนวนแดเมจที่ทำกับโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้าม"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Kepakan Ganas",
			th: "สยายปีกโหมกระหน่ำ"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 50.",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย"
		},

		damage: 150,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card