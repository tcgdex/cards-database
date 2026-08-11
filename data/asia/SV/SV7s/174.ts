import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เคเค็นคานิ"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		th: "พลังต่อยแข็งแกร่งมาก แต่เคลื่อนไหวช้า พ่นฟองน้ำแข็งจากปากเพื่อหยุดการเคลื่อนไหวของฝ่ายตรงข้าม"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "จัดเตรียม"
		},

		effect: {
			th: "พลังงาน[ไร้สี]สำหรับใช้ท่าต่อสู้ของโปเกมอนนี้จะลดลง ตามจำนวนการ์ด [ไห่ไต้] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา"
		}
	}],

	attacks: [{
		name: {
			th: "หมัดหนัก"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [หมัดหนัก] ไม่ได้"
		},

		damage: 250,
		cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card