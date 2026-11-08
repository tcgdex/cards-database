import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "บาคุกาเมส",
		'id-id': "Turtonator"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'th-th': "แบกกระดองที่ถูกเคลือบด้วยดินระเบิด เอาคืนคู่ต่อสู้ที่โจมตีมาด้วยระเบิดยักษ์",
		'id-id': "Turtonator menggendong tempurung yang dilapisi oleh bahan peledak. Jika diserang musuh, ia akan membalas dengan ledakan dahsyat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เฟลมเซอร์เคิล",
			'id-id': "Flame Circle"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้] เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะหนีไม่ได้",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "ไฟลุกพุ่งเข้าใส่",
			'id-id': "Terjangan Kobar Api"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 60 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 60."
		},

		damage: 180,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card