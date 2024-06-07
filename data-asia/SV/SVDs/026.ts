import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "คุยทาแรน",
		id: "Heatmor"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		th: "ใช้เปลวไฟเหมือนกับเป็นลิ้น ค่อย ๆ ละลายโครงกระดูกส่วนนอกแข็ง ๆ ของไอแอนท์แล้วสวาปาม",
		id: "Heatmor menggunakan api bagaikan lidah. Pokémon ini secara perlahan melelehkan eksoskeleton keras Durant dan menyantapnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เอนเนอร์จี้เบิร์นเนอร์",
			id: "Energy Burner"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
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