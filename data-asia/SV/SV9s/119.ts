import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "วูลู <ของฮ็อป>",
		id: "Wooloo <Hop>"
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		th: "ถ้าปล่อยขนไว้ยาวเกินไปจะขยับตัวไม่ได้ ผ้าที่ทอขึ้นจากขนตามตัวของ วูลูทนทานจนน่าประหลาดใจ",
		id: "Wooloo tidak dapat bergerak jika bulunya tumbuh terlalu panjang. Kain yang dirajut menggunakan bulu Wooloo sangat kuat."
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