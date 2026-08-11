import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Grapploct",
		'th-th': "โอโทสพัส"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'id-id': "Seluruh tubuh Grapploct terbentuk dari otot-otot kekar. Jurus pitingan yang dilakukan menggunakan tentakelnya memiliki kekuatan yang dahsyat.",
		'th-th': "ทั่วร่างคือมวลกล้ามเนื้อ พละกำลังจากท่าบีบรัดด้วยหนวดนั้นน่า เกรงขาม"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Chop",
			'th-th': "‌สับ"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Tentacle Rage",
			'th-th': "เทนทาเคิลเรจ"
		},

		effect: {
			'id-id': "Jika Pokémon ini memiliki Token Kerusakan, serangan ini dapat digunakan dengan 1 Energi {Petarung}.",
			'th-th': "ท่าต่อสู้นี้ ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ สามารถใช้ได้ด้วยพลังงาน[ต่อสู้] 1 ลูก"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card