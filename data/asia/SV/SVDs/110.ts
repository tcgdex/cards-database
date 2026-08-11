import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ลาวด์โบนex",
		'id-id': "Skeledirge ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "เพลงระเบิดร้อน",
			'id-id': "Nyanyian Ledakan Panas"
		},

		effect: {
			'th-th': "ในเทิร์นฝ่ายเรา ถ้าทิ้งการ์ด [พลังงานพื้นฐาน[ไฟ]] 1 ใบจากบนมือฝ่ายเราที่ตำแหน่งทิ้งการ์ด ใช้ได้ 1 ครั้ง เทิร์นนี้ แดเมจของท่าต่อสู้ที่โปเกมอนฝ่ายเรา ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+60]",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri jika membuang 1 lembar Energi Dasar {Api} dari Kartu Pegangan sendiri ke Trash. Pada giliran ini, kerusakan akibat serangan yang digunakan oleh Pokémon sendiri kepada Pokémon Bertarung lawan bertambah sejumlah 60."
		}
	}],

	attacks: [{
		name: {
			'th-th': "ลัสเตอร์เบิร์น",
			'id-id': "Luster Burn"
		},

		effect: {
			'th-th': "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด",
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 160,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card