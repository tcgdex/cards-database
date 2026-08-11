import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "เฮอเดอเรีย",
		id: "Herdier"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		th: "ขนดำที่ปกคลุมร่างกายนั้นหนาและมีความยืดหยุ่น เขี้ยวคม ๆ ก็สามารถเด้งคืนกลับไปได้",
		id: "Rambut hitam yang menyelimuti tubuh Herdier tebal dan membal. Taring tajam pun dapat dipantulkan oleh rambut tersebut."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "เตะกลับหลัง",
			id: "Tendangan Belakang"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ตบหนัก",
			id: "Hantaman Penuh Tenaga"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card