import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Vibrava",
		th: "วิบราวา"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		id: "Ia memvibrasikan sayapnya dengan sangat kencang untuk menghasilkan gelombang ultrasonik. Ia melelehkan mangsanya yang pingsan dengan cairan pencernaannya.",
		th: "สร้างคลื่นเสียงความถี่สูงออกมาด้วยการกระพือปีกอย่างรุนแรง ละลายเหยื่อที่หมดสติด้วยน้ำย่อย"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Suara Melengking",
			th: "เสียงสยอง"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, kerusakan akibat serangan yang diterima Pokémon yang menerima serangan ini bertambah sejumlah 50.",
			th: "เทิร์นถัดไปของฝ่ายเรา แดเมจของท่าต่อสู้ที่โปเกมอนที่ได้รับท่าต่อสู้นี้จะได้รับ จะถูก [+50]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Cutter Wind",
			th: "คัตเตอร์วินด์"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card