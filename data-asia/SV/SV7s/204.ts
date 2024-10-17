import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เทราปากอสex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			th: "ยูเนียนบีต"
		},

		effect: {
			th: "ท่าต่อสู้นี้ ไม่สามารถใช้ได้ในเทิร์นแรกสุดของผู้เล่นฝ่ายเล่นทีหลัง แดเมจจะเท่ากับจำนวนโปเกมอนบนเบนช์ฝ่ายเรา x30"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "คราวน์โอปอล"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[พื้นฐาน] (ยกเว้นโปเกมอน[ไร้สี])"
		},

		damage: 180,
		cost: ["Grass", "Water", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card