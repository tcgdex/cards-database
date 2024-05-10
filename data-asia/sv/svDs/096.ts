import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "เดลวิล",
		id: "Houndour"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		th: "ฉลาด จะใช้เสียงร้องต่าง ๆ เพื่อสื่อสารกับฝูงระหว่างการล่า",
		id: "Houndour memiliki kecerdasan untuk berburu sambil berkomunikasi dengan kawanannya menggunakan raungan yang berbeda."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กัดติด",
			id: "Menggigit"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			th: "เขี้ยวแห่งความมืด",
			id: "Taring Kegelapan"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card