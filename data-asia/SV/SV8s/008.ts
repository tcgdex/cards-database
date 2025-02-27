import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Morelull",
		th: "เนมาชู"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		id: "Tudung jamur Morelull sangat lezat. Para Pokémon di hutan menyantapnya dan tudung ini akan tumbuh kembali dalam semalam.",
		th: "หมวกเห็ดบนหัวนั้นอร่อยมาก ถูกเหล่าโปเกมอนในป่ากินแต่ก็งอกใหม่ ได้ภายในคืนเดียว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menempel",
			th: "ติดหนึบ"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card