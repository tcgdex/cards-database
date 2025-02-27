import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Pikachu ex",
		th: "พิคาชูex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Hati Pejuang",
			th: "หัวใจบากบั่น"
		},

		effect: {
			id: "Saat Pokémon ini KO karena menerima kerusakan akibat serangan ketika HP Pokémon ini masih penuh, Pokémon ini tidak KO dan tetap berada di Arena dengan kondisi sisa HP sejumlah 10.",
			th: "ในตอนที่โปเกมอนนี้มี HP เต็ม และโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้และจะ [หมดสภาพ] โปเกมอนนี้จะไม่[หมดสภาพ] และจะอยู่บนกระดานด้วย HP ที่เหลือ [10]"
		}
	}],

	attacks: [{
		name: {
			id: "Topaz Bolt",
			th: "โทแพซโวลต์"
		},

		effect: {
			id: "Pilih 3 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 3 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 300,
		cost: ["Grass", "Lightning", "Metal"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card