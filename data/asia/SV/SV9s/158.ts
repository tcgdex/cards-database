import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ออนแบท",
		'id-id': "Noibat"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'th-th': "ปล่อยคลื่นเสียงความถี่สูงจากใบหูขนาดใหญ่เพื่อค้นหาผลไม้ที่เป็น อาหารของมัน ชอบหลงคิดว่าคาจิชชูเป็นอาหาร"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ควิกดรอว์",
			'id-id': "Quick Draw"
		},

		effect: {
			'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Ambil 1 kartu dari atas Deck sendiri."
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card