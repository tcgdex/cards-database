import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เดลวิล",
		'id-id': "Houndour"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'th-th': "ฉลาด จะใช้เสียงร้องต่าง ๆ เพื่อสื่อสารกับฝูงระหว่างการล่า",
		'id-id': "Houndour memiliki kecerdasan untuk berburu sambil berkomunikasi dengan kawanannya menggunakan raungan yang berbeda."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กัดติด",
			'id-id': "Menggigit"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'th-th': "เขี้ยวแห่งความมืด",
			'id-id': "Taring Kegelapan"
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