import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "นิวลา",
		id: "Sneasel"
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		th: "เจ้าเล่ห์มาก บางครั้งทำงานเป็นทีมโดยให้ตัวหนึ่งล่อพ่อแม่ออกไป ส่วนอีกตัวก็ไปเอาไข่ออกมา",
		id: "Pokémon ini menunjukkan kerja tim seperti ketika satu Sneasel dengan cerdiknya memancing induk telur, satu Sneasel lainnya pergi mengambil telur tersebut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ตัด",
			id: "Potongan Iai"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			th: "รุกประชิด",
			id: "Mendesak"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 30,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card