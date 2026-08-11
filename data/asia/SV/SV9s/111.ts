import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โอโอทาจิ",
		id: "Furret"
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		th: "เลี้ยงลูกอยู่ในรังที่แคบและยาว เมื่อลูกโตขึ้น จะพาลูกออกไปนอกรัง แล้วให้เตรียมตัวเพื่อใช้ชีวิตด้วยตัวเองได้",
		id: "Ia membesarkan anaknya di liang yang panjang dan sempit. Setelah anaknya tumbuh, ia akan membuat anaknya melakukan persiapan untuk hidup mandiri di luar liang."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ข่วน",
			id: "Mencakar"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			th: "เจ็ตเฮด",
			id: "Jet Head"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card