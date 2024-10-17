import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "บริดิวรัส"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		th: "ขุดรูในภูเขาเพื่อหาอาหาร มันทนทานมาก แม้จะติดอยู่ในอุโมงค์ถล่มก็ไม่สะเทือน"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "สะพานเชื่อมเหล็กกล้า"
		},

		effect: {
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนฝ่ายเราทุกตัวที่มีพลังงาน[โลหะ]ติดอยู่ ทั้งหมดจะหายไป"
		}
	}],

	attacks: [{
		name: {
			th: "ไอออนบลัสเตอร์"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 160,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card