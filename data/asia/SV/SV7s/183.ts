import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โกคูลิน"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		th: "หัวใจและสมองมีขนาดเล็ก ร่างกายส่วนใหญ่เป็นกระเพาะอาหาร มีน้ำย่อยที่ละลายได้ทุกอย่าง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "น้ำลายยืด"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			th: "ลมหายใจพิษ"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]"
		},

		damage: 30,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card