import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "มินิริว",
		'id-id': "Dratini"
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'th-th': "ขณะที่ถูกปกป้องด้วยน้ำตกที่ไหลแรง ก็จะลอกคราบไปเรื่อย ๆ จนค่อย ๆ โตขึ้น",
		'id-id': "Sambil dilindungi air terjun yang mengalir deras, Dratini terus-menerus berganti kulit dan tumbuh membesar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "แส้หาง",
			'id-id': "Cambuk Ekor"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card