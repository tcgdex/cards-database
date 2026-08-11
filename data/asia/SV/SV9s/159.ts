import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "วูลูของฮ็อป",
		id: "Wooloo <Hop>"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		th: "ถ้าปล่อยขนไว้ยาวเกินไปจะขยับตัวไม่ได้ ผ้าที่ทอขึ้นจากขนตามตัวของ วูลูทนทานจนน่าประหลาดใจ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ดีด",
			id: "Tendangan Penghempas"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card