import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คามุคาเมะ",
		id: "Chewtle"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		th: "เด็ก ๆ ชอบเล่นแข่งกัน โดยจะยกกิ่งไม้ที่คามุคาเมะกัดอยู่ขึ้น แล้วดูว่าตัวไหนจะกัดกิ่งไม้อยู่ได้นานกว่ากัน",
		id: "Permainan mengangkat ranting pohon yang digigit oleh Chewtle dan mengadu lamanya waktu Pokémon ini bergantung populer di kalangan anak-anak."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "พุ่งหัวชน",
			id: "Tandukan Kepala"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card