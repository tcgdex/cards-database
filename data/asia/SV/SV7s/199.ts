import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "อี้เนะอินุex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			th: "พอยซันมัสเซิล"
		},

		effect: {
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ความมืด]] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด เมื่อติดแล้ว ทำให้โปเกมอนนี้เป็นสภาวะ[พิษ]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "เครซีเชน"
		},

		effect: {
			th: "ถ้าโปเกมอนนี้เป็นสภาวะ[พิษ] การโจมตีนี้จะเพิ่มแดเมจอีก 130"
		},

		damage: "130+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card