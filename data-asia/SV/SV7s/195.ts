import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เดนทูลาex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			th: "เส้นใยอัดเสย"
		},

		effect: {
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 110"
		},

		damage: "110+",
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			th: "ฟูลกูไรต์"
		},

		effect: {
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ ทั้งหมดที่ตำแหน่งทิ้งการ์ด เทิร์นถัดไปของฝ่ายตรงข้าม ฝ่ายตรงข้ามไม่สามารถนำการ์ดไอเท็มจากบนมือออกมาใช้ได้"
		},

		damage: 180,
		cost: ["Grass", "Lightning", "Fighting"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card