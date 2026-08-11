import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Sizzlipede",
		'th-th': "ยาคุเดะ"
	},

	illustrator: "Minahamu",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'id-id': "Sizzlipede memancarkan panas menggunakan gas mudah terbakar yang dihimpun dalam tubuhnya. Bagian perutnya yang berwarna kuning merupakan bagian yang paling panas.",
		'th-th': "ปล่อยความร้อนจากแก๊สเผาไหม้ที่กักไว้ในร่าง โดยเฉพาะส่วน สีเหลืองตรงท้องนั้นร้อนมาก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Nyala Api",
			'th-th': "เชื้อไฟ"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			'id-id': "Mengait",
			'th-th': "จับแขวน"
		},

		damage: 30,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card