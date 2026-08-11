import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Quaxwell",
		th: "เวลคาโมะ"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		id: "Quaxwell adalah pekerja keras. Pokémon ini mengamati pergerakan Pokémon dan manusia dari berbagai macam daerah, lalu memasukkan gerakan tersebut ke dalam gerakan tariannya sendiri.",
		th: "โปเกมอนที่มีความพยายามสูง คอยสังเกตท่าทางของโปเกมอนและ ผู้คนจากหลายภูมิภาค แล้วนำมาประยุกต์เข้ากับการเต้นรำของตน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Aqua Edge",
			th: "อควาเอดจ์"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card