import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "มาราคัจจิ",
		id: "Maractus"
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		th: "โปรยเมล็ดปีละครั้ง เมล็ดดอกไม้มีสารอาหารเต็มเปี่ยมและเป็นแหล่ง อาหารอันมีค่าในทะเลทราย"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			th: "หนามระเบิดกระจาย",
			id: "Jarum Eksplosi"
		},

		effect: {
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอน ฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว วางตัวนับแดเมจ 6 ตัวบนโปเกมอนที่ใช้ท่า ต่อสู้",
			id: "Saat Pokémon ini ada di Arena Bertarung dan KO karena menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 6 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			th: "ไล่ต้อน",
			id: "Memojokkan"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card