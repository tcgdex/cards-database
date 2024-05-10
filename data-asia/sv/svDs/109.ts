import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "โซโด",
		id: "Cufant"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		th: "ใช้ปลายจมูกที่แหลมคมในการขูดก้อนหินแข็ง ๆ แล้วนำมากิน มีนิสัยอ่อนโยนมักช่วยมนุษย์ทำงานที่ใช้แรง",
		id: "Cufant menggunakan ujung hidung lancipnya untuk mengikis batu dan memakannya. Sifatnya lemah lembut dan membantu pekerjaan berat manusia."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เหยียบ",
			id: "Menginjak"
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