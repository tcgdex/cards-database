import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Grapploct",
		th: "โอโทสพัส"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		id: "Seluruh tubuh Grapploct terbentuk dari otot-otot kekar. Jurus pitingan yang dilakukan menggunakan tentakelnya memiliki kekuatan yang dahsyat.",
		th: "ทั่วร่างคือมวลกล้ามเนื้อ พละกำลังจากท่าบีบรัดด้วยหนวดนั้นน่า เกรงขาม"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Chop",
			th: "‌สับ"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Tentacle Rage",
			th: "เทนทาเคิลเรจ"
		},

		effect: {
			id: "Jika Pokémon ini memiliki Token Kerusakan, serangan ini dapat digunakan dengan 1 Energi {Petarung}.",
			th: "ท่าต่อสู้นี้ ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ สามารถใช้ได้ด้วยพลังงาน[ต่อสู้] 1 ลูก"
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