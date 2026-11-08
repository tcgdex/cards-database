import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Morelull",
		'th-th': "เนมาชู"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'id-id': "Tudung jamur Morelull sangat lezat. Para Pokémon di hutan menyantapnya dan tudung ini akan tumbuh kembali dalam semalam.",
		'th-th': "หมวกเห็ดบนหัวนั้นอร่อยมาก ถูกเหล่าโปเกมอนในป่ากินแต่ก็งอกใหม่ ได้ภายในคืนเดียว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menempel",
			'th-th': "ติดหนึบ"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card