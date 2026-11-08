import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คุยทาแรน",
		'id-id': "Heatmor"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'th-th': "ใช้เปลวไฟเหมือนกับเป็นลิ้น ค่อย ๆ ละลายโครงกระดูกส่วนนอกแข็ง ๆ ของไอแอนท์แล้วสวาปาม",
		'id-id': "Heatmor menggunakan api bagaikan lidah. Pokémon ini secara perlahan melelehkan eksoskeleton keras Durant dan menyantapnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เอนเนอร์จี้เบิร์นเนอร์",
			'id-id': "Energy Burner"
		},

		effect: {
			'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		},

		damage: "30+",
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