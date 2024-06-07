import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "วิคทินีex",
		id: "Victini ex"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			th: "พลิ้ว",
			id: "Serangan Mundur"
		},

		effect: {
			th: "หากต้องการ สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			id: "Pemain dapat menukar Pokémon ini dengan Pokémon Cadangan."
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			th: "วิกทอรีเฟลม",
			id: "Victory Flame"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 220,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card