import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Togepi",
		th: "โทเกปี"
	},

	illustrator: "Yoko Hishida",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		id: "Kabarnya cangkang Togepi dipenuhi dengan kebahagiaan dan Pokémon ini akan membagikan keberuntungan jika diperlakukan dengan lemah lembut.",
		th: "ดูเหมือนว่าในเปลือกของมันจะเต็มไปด้วยความสุข ว่ากันว่า ถ้าใจดี ด้วยมันจะแบ่งความโชคดีมาให้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tumbuk",
			th: "ปัด"
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