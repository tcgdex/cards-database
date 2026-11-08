import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โบรโรโรมex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "แอกเซลแฟลช"
		},

		effect: {
			'th-th': "เทิร์นนี้ ถ้าโปเกมอนนี้ออกจากเบนช์มาที่ตำแหน่งต่อสู้ การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		},

		damage: "20+",
		cost: ["Metal"]
	}, {
		name: {
			'th-th': "สปีดเบรก"
		},

		effect: {
			'th-th': "ทิ้งโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ ที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 250,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card