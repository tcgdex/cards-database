import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Bronzor",
		th: "โดมิเรอร์"
	},

	illustrator: "Nabatame Kazutaka",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		id: "Bronzor ditemukan di makam kuno. Dikatakan bahwa kekuatan misterius bersemayam pada pola di punggungnya.",
		th: "พบเจอในหลุมศพเก่า ว่ากันว่าลายที่หลังมีพลังลึกลับซ่อนอยู่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Shield Attack",
			th: "ชีลด์แอทแทก"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		},

		damage: "20+",
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card