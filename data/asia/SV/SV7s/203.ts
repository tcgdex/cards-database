import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "มิมิซึซึex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "เอาคืนตุ้บตั้บ"
		},

		effect: {
			th: "เมื่อโปเกมอนนี้ ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจบนโปเกมอนที่ใช้ท่าต่อสู้ ตามจำนวนพลังงาน[โลหะ]ที่ติดอยู่กับโปเกมอนนี้ x2 ตัว"
		}
	}],

	attacks: [{
		name: {
			th: "ปิดกั้นด้วยศิลา"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card