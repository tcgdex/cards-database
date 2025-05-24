import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ไคเด็น <ของนันจาโม>",
		id: "Wattrel <Mistika>"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		th: "กระดูกที่ปีกจะผลิตกระแสไฟฟ้าเมื่อได้รับลม จะดำดิ่งลงสู่ทะเลเพื่อจับ เหยื่อด้วยการช็อตด้วยไฟฟ้า",
		id: "Kerangka sayap Wattrel menciptakan listrik jika menerima angin. Pokémon ini terjun ke laut, menyetrum mangsa, dan menangkapnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เคลื่อนที่ความไวแสง",
			id: "Serangan Cepat"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		},

		damage: "10+",
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card