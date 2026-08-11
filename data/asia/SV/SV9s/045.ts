import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ซุพีคา <ของนันจาโม>",
		id: "Tadbulb <Mistika>"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		th: "แกว่งหางเพื่อผลิตไฟฟ้า เมื่อรู้สึกถึงอันตรายจะทำให้ไฟบนหัวกะพริบ เพื่อแจ้งพวกพ้อง",
		id: "Tadbulb menghasilkan listrik dengan menggoyangkan ekornya. Ketika merasakan adanya bahaya, Pokémon ini memberitahukan sesamanya dengan mengedipkan cahaya kepalanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กระแสไฟน้อยนิด",
			id: "Listrik Mini"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card