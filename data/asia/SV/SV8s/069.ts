import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Togetic",
		'th-th': "โทเกชิก"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'id-id': "Kabarnya Togetic menampakkan diri di hadapan orang yang hatinya lemah lembut untuk membawakan kebahagiaan kepada orang tersebut.",
		'th-th': "ว่ากันว่าจะปรากฏตัวต่อหน้าคนที่มีจิตใจดีเพื่อแบ่งความสุขให้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Ciuman Penyerap",
			'th-th': "เดรนคิส"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah 30.",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30]"
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