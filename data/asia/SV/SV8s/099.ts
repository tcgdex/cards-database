import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Phanpy",
		'th-th': "โกมาโซ"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'id-id': "Phanpy jauh lebih kuat dibandingkan penampilannya. Putaran belalainya dapat mematahkan lengan manusia yang bersentuhan dengannya.",
		'th-th': "มีพละกำลังมากกว่าที่ตาเห็น ถ้าแขนไปโดนงวงที่แกว่งไปมาเข้าละก็ กระดูกหักแน่ ๆ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tandukan Kepala",
			'th-th': "พุ่งหัวชน"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card