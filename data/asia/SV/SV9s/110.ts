import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โอทาจิ",
		'id-id': "Sentret"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'th-th': "โปเกมอนที่มีความระแวดระวังสูง หางที่เคลื่อนไหวอย่างอ่อนช้อยนั้น เต็มไปด้วยกล้ามเนื้อ เมื่อสัมผัสจะรู้สึกแข็ง",
		'id-id': "Pokémon yang memiliki kewaspadaan tinggi. Ekornya yang bergerak luwes itu berotot dan keras jika disentuh."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ฝ่ามือตบ",
			'id-id': "Tampar"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card