import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Togepi",
		'th-th': "โทเกปี"
	},

	illustrator: "Yoko Hishida",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'id-id': "Kabarnya cangkang Togepi dipenuhi dengan kebahagiaan dan Pokémon ini akan membagikan keberuntungan jika diperlakukan dengan lemah lembut.",
		'th-th': "ดูเหมือนว่าในเปลือกของมันจะเต็มไปด้วยความสุข ว่ากันว่า ถ้าใจดี ด้วยมันจะแบ่งความโชคดีมาให้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tumbuk",
			'th-th': "ปัด"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card