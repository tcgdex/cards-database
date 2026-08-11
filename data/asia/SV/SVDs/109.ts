import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โซโด",
		'id-id': "Cufant"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		'th-th': "ใช้ปลายจมูกที่แหลมคมในการขูดก้อนหินแข็ง ๆ แล้วนำมากิน มีนิสัยอ่อนโยนมักช่วยมนุษย์ทำงานที่ใช้แรง",
		'id-id': "Cufant menggunakan ujung hidung lancipnya untuk mengikis batu dan memakannya. Sifatnya lemah lembut dan membantu pekerjaan berat manusia."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เหยียบ",
			'id-id': "Menginjak"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
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