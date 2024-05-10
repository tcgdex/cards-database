import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "โคลิงก์",
		id: "Shinx"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		th: "ทุกครั้งที่ขยับตัว กล้ามเนื้อจะยืดและหดตัวทำให้เกิดไฟฟ้า เมื่อเข้าตาจน ร่างจะเปล่งแสงเป็นประกาย",
		id: "Tiap kali menggerakkan tubuhnya, otot Shinx memanjang dan memendek serta menghasilkan listrik. Pokémon ini bersinar ketika dalam bahaya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			th: "คำรามสนั่น",
			id: "Mengaum Kencang"
		},

		effect: {
			th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		}
	}],

	attacks: [{
		name: {
			th: "กระแทก",
			id: "Menyeruduk"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card