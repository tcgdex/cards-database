import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ไซฮอร์น",
		id: "Rhyhorn"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		th: "มีลักษณะนิสัยที่เมื่อออกตัววิ่งไปแล้ว จะไม่ยอมหยุดวิ่งแม้จะชนเข้ากับหินก้อนใหญ่ก็ตาม ทำให้ถิ่นที่อยู่อาศัยของมันแผ่กว้างออกไป",
		id: "Habitatnya menjadi luas dikarenakan sifatnya yang ketika sudah mulai berlari tidak akan berhenti meski menabrak bebatuan besar sekalipun."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เขาขวิด",
			id: "Tusukan Tanduk"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card