import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เดนทูลา",
		'id-id': "Galvantula"
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'th-th': "โจมตีด้วยการปล่อยขนท้องที่ชาร์จไฟฟ้า ถ้าถูกขนทิ่มทั่วร่างจะชาไปสามวันสามคืน",
		'id-id': "Galvantula melakukan serangan dengan menerbangkan bulu perutnya yang bermuatan listrik. Siapa yang tertusuk bulu tersebut akan kejang-kejang selama tiga hari tiga malam."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "ตารวม",
			'id-id': "Mata Majemuk"
		},

		effect: {
			'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนนี้ ใช้ทำกับโปเกมอนที่มีความสามารถบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+50]",
			'id-id': "Kerusakan akibat serangan yang digunakan oleh Pokémon ini kepada Pokémon yang memiliki Ability di Arena Bertarung lawan bertambah sejumlah 50."
		}
	}],

	attacks: [{
		name: {
			'th-th': "ใยแปล๊บปล๊าบ",
			'id-id': "Jaring Berkejut-kejut"
		},

		effect: {
			'th-th': "ถ้าโปเกมอนนี้มีพลังงาน[สายฟ้า]ติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80",
			'id-id': "Jika Pokémon ini mengenakan Energi {Listrik}, kerusakan yang diberikan bertambah sejumlah 80."
		},

		damage: "50+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card