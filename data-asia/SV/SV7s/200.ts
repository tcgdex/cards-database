import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "มาชิมาชิระex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "ผิดคาด"
		},

		effect: {
			th: "เมื่อโปเกมอนนี้ ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว ถ้าบนกระดานฝ่ายเรามี [โมโมวาโร่【ex】] อยู่ การ์ดรางวัลที่หยิบได้จะลดลง 1 ใบ"
		}
	}],

	attacks: [{
		name: {
			th: "เดอร์ตี้เฮด"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [เดอร์ตี้เฮด] ไม่ได้"
		},

		damage: 190,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card