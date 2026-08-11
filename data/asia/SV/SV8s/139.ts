import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Eternatus",
		th: "มุเก็นไดนา"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],

	description: {
		id: "Eternatus dapat aktif karena inti di dada Pokémon ini mengisap energi yang terpancar dari daratan Daerah Galar.",
		th: "แกนกลางช่วงอกจะดูดซับพลังงานที่พวยพุ่งจากผืนดินของภูมิภาคกาลาร์ เพื่อใช้ชีวิตอยู่อย่างกระฉับกระเฉง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Dynablast",
			th: "ไดนาบลาสต์"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan adalah Pokémon {ex}, kerusakan yang diberikan bertambah sejumlah 80.",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】] การโจมตีนี้จะ เพิ่มแดเมจอีก 80"
		},

		damage: "10+",
		cost: ["Darkness"]
	}, {
		name: {
			id: "World End",
			th: "เวิลด์เอนด์"
		},

		effect: {
			id: "Buang Stadium yang ada di Arena ke Trash. Jika tidak dapat membuangnya ke Trash, serangan ini gagal.",
			th: "ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด ถ้าทิ้งการ์ดไม่ได้ ท่าต่อสู้นี้จะล้มเหลว"
		},

		damage: 230,
		cost: ["Fire", "Darkness", "Darkness"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card