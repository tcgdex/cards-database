import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คิจิคิกิสึex"
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
			th: "พลิกวิกฤต"
		},

		effect: {
			th: "ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนฝ่ายเรา[หมดสภาพ] ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา เทิร์นนี้ ถ้าใช้ [พลิกวิกฤต] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้"
		}
	}],

	attacks: [{
		name: {
			th: "ครูเอลแอร์โรว์"
		},

		effect: {
			th: "ทำแดเมจ 100 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card