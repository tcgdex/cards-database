import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Braviary",
		'th-th': "วอร์เกิล"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'id-id': "Braviary adalah pendekar langit pemberani yang tidak akan berhenti bertarung demi kawannya meskipun ia akan terluka.",
		'th-th': "นักรบแห่งฟ้ากว้างผู้กล้าหาญที่จะต่อสู้เพื่อพวกพ้องอย่างไม่หยุดยั้งโดย ไม่สนว่าตนจะบาดเจ็บเพียงใด"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Seret Pergi",
			'th-th': "ลากออกมา"
		},

		effect: {
			'id-id': "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, berikan kerusakan sejumlah 40 kepada Pokémon Bertarung yang baru.",
			'th-th': "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำแดเมจ 40 กับโปเกมอนที่เพิ่งออกมาใหม่"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Blast Wind",
			'th-th': "บลาสต์วินด์"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
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
	regulationMark: "H"
}

export default card