import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "แชนเดลา",
		'id-id': "Chandelure"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		'th-th': "ว่ากันว่าในคฤหาสน์ที่ใช้แชนเดลาแทนแสงไฟนั้นจะมีงานศพอยู่ตลอด",
		'id-id': "Dikatakan bahwa rumah besar yang menggunakan Chandelure sebagai pengganti lampu kandelir untuk penerangan terus menerus mengadakan acara pemakaman."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'th-th': "เผาเป็นลูกโซ่",
			'id-id': "Rentetan Pembakaran"
		},

		effect: {
			'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x50",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 50 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		},

		damage: "10+",
		cost: ["Fire"]
	}, {
		name: {
			'th-th': "ฮีทบลาสต์",
			'id-id': "Heat Blast"
		},

		damage: 150,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card