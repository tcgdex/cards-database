import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Togetic",
		th: "โทเกชิก"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Kabarnya Togetic menampakkan diri di hadapan orang yang hatinya lemah lembut untuk membawakan kebahagiaan kepada orang tersebut.",
		th: "ว่ากันว่าจะปรากฏตัวต่อหน้าคนที่มีจิตใจดีเพื่อแบ่งความสุขให้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Ciuman Penyerap",
			th: "เดรนคิส"
		},

		effect: {
			id: "Pulihkan HP Pokémon ini sejumlah 30.",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]"
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