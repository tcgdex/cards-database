import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "ริคุคุราเกะex",
		id: "Toedscruel ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "เส้นใยราปกป้อง",
			id: "Hifa Pelindung"
		},

		effect: {
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนฝ่ายเราทุกตัวที่มีพลังงานติดอยู่ จะไม่ได้รับเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอนฝ่ายตรงข้ามใช้ (เอฟเฟกต์ที่ได้รับไปแล้ว จะไม่หายไป)",
			id: "Selama Pokémon ini ada di Arena, semua Pokémon sendiri yang mengenakan Energi tidak menerima efek akibat serangan yang digunakan oleh Pokémon lawan. (Efek yang telah dialami tidak dipulihkan.)"
		}
	}],

	attacks: [{
		name: {
			th: "โคโลนีรัช",
			id: "Colony Rush"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนโปเกมอนที่มีพลังงาน[หญ้า]ติดอยู่บนเบนช์ฝ่ายเรา x40",
			id: "Kerusakan yang diberikan bertambah sejumlah 40 untuk tiap Pokémon yang mengenakan Energi {Daun} di Cadangan sendiri."
		},

		damage: "80+",
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card