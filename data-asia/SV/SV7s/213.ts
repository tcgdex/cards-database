import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คามิสึโอโรจิex"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "ชาร์จความสุก"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา หลังจากนั้น ฟื้นฟู HP ของโปเกมอนที่ติดการ์ดนั้น [30]"
		}
	}],

	attacks: [{
		name: {
			th: "พายุน้ำตาลเชื่อม"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[หญ้า]ที่ติดอยู่กับโปเกมอนฝ่ายเราทุกตัว x30"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card