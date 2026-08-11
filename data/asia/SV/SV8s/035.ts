import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Scovillain ex",
		th: "สโกวิลเลินex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tipe Ganda",
			th: "ดับเบิลไทป์"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, Pokémon ini menjadi 2 tipe yaitu {Daun} dan {Api}.",
			th: "โปเกมอนนี้ ตราบใดที่ยังอยู่บนกระดาน จะเป็น 2 ประเภทคือ[หญ้า]และ[ไฟ]"
		}
	}],

	attacks: [{
		name: {
			id: "Spicy Rage",
			th: "สไปซีเรจ"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 70 untuk tiap Token Kerusakan yang dimiliki Pokémon ini.",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x70"
		},

		damage: "10+",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card