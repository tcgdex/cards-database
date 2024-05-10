import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "แชนเดลา",
		id: "Chandelure"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		th: "ว่ากันว่าในคฤหาสน์ที่ใช้แชนเดลาแทนแสงไฟนั้นจะมีงานศพอยู่ตลอด",
		id: "Dikatakan bahwa rumah besar yang menggunakan Chandelure sebagai pengganti lampu kandelir untuk penerangan terus menerus mengadakan acara pemakaman."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "เผาเป็นลูกโซ่",
			id: "Rentetan Pembakaran"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x50",
			id: "Kerusakan yang diberikan bertambah sejumlah 50 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		},

		damage: "10+",
		cost: ["Fire"]
	}, {
		name: {
			th: "ฮีทบลาสต์",
			id: "Heat Blast"
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