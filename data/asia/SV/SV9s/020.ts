import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "มาสเคอเนีย",
		id: "Meowscarada"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		th: "ภาพสะท้อนของขนที่ด้านหลังเสื้อคลุมอำพรางกิ่งก้านทำให้ดอกไม้ ดูเหมือนลอยอยู่",
		id: "Bunga yang terlihat melayang adalah kamuflase tangkai bunga oleh pantulan bulu di balik jubah Meowscarada."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			th: "โชว์ไทม์",
			id: "Show Time"
		},

		effect: {
			th: "ถ้าโปเกมอนนี้อยู่บนเบนช์ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา สลับโปเกมอนนี้กับ โปเกมอนบนตำแหน่งต่อสู้",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Cadangan. Tukar Pokémon ini dengan Pokémon Bertarung."
		}
	}],

	attacks: [{
		name: {
			th: "ไรซิงบลูม",
			id: "Rising Bloom"
		},

		effect: {
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】] การโจมตีนี้จะ เพิ่มแดเมจอีก 90",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon {ex}, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "90+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card