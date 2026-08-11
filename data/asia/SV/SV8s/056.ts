import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Magnemite",
		th: "คอยล์"
	},

	illustrator: "Hoshino KURO",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		id: "Magnemite berpindah sambil tetap melayang di udara. Pokémon ini memancarkan gelombang elektromagnetik dan sebagainya dari unit sisi kiri dan kanan di tubuhnya.",
		th: "ลอยและเคลื่อนที่กลางอากาศ แผ่คลื่นแม่เหล็กไฟฟ้าออกมาจากหน่วย ซ้ายขวา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Bola Petir",
			th: "ลูกกลมเจิดจ้า"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card