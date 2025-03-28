import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "แอบโซล",
		id: "Absol"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		th: "วิ่งผ่านทุ่งหญ้าป่าเขาราวกับสายลม เขาทรงคันธนูนั้นไวต่อการรับรู้ถึงลางร้ายแห่งภัยธรรมชาติ",
		id: "Absol berlari melintasi padang dan gunung bagaikan angin. Tanduknya yang membusur merasakan pertanda datangnya bencana alam dengan sensitif."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "แบดฟอล",
			id: "Bad Fall"
		},

		effect: {
			th: "ถ้าบนกระดานฝ่ายเรามีพลังงาน[ความมืด]มากกว่าหรือเท่ากับ 3 ลูก การโจมตีนี้จะเพิ่มแดเมจอีก 50",
			id: "Jika ada 3 Energi {Kegelapan} atau lebih di Arena sendiri, kerusakan yang diberikan bertambah sejumlah 50."
		},

		damage: "20+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card