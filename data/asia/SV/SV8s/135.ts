import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Turtonator",
		'th-th': "บาคุกาเมส"
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'id-id': "Turtonator menggendong tempurung yang dilapisi oleh bahan peledak. Jika diserang musuh, ia akan membalas dengan ledakan dahsyat.",
		'th-th': "แบกกระดองที่ถูกเคลือบด้วยดินระเบิด เอาคืนคู่ต่อสู้ที่โจมตีมาด้วย ระเบิดยักษ์"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Bakar Gosong Habis",
			'th-th': "ไหม้หมดเกลี้ยง"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon {ex} di Arena Bertarung lawan, lalu buang ke Trash.",
			'th-th': "เลือกพลังงานที่ติดอยู่กับ [โปเกมอน【ex】] บนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		cost: ["Fire"]
	}, {
		name: {
			'id-id': "Entakan Ledakan Panas",
			'th-th': "ตราประทับระเบิดร้อน"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card