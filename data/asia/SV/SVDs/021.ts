import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฮีทโรตอม",
		'id-id': "Rotom Panas"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'th-th': "หากเตาอบไมโครเวฟทำงานไม่ปกติ โรตอมที่อยู่ข้างในก็จะอ่อนแอลงด้วยเช่นกัน",
		'id-id': "Jika ovennya berada dalam kondisi tidak bagus, Rotom yang ada di dalamnya akan kehilangan semangat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ฮีทแท็กเกิล",
			'id-id': "Heat Tackle"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 40 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 40."
		},

		damage: 100,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card