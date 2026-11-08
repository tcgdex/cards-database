import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เปอร์เซียน"
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'th-th': "ระวังตอนอารมณ์รุนแรงจนตั้งหางตรงให้ดี เป็นสัญญาณบอกว่ามันกำลังจะกระโจนเข้ากัด"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ข่วนแหลก"
		},

		effect: {
			'th-th': "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x50"
		},

		damage: "50×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "สแลชคลอว์"
		},

		damage: 100,
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