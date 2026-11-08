import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "กิกิเกียร์ <ของ N>",
		'id-id': "Klinklang <N>"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		'th-th': "โจมตีด้วยกระแสไฟฟ้าแรงสูงจากปลายหนาม สะสมพลังงานจำนวน มากไว้ที่แกนกลางสีแดง",
		'id-id': "Klinklang menembakkan listrik yang kuat dari ujung durinya. Inti tubuh merahnya menyimpan banyak energi."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'th-th': "แมกเน็ทบลาสต์",
			'id-id': "Magnetic Blast"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ทริปเปิลสแมช",
			'id-id': "Triple Smash"
		},

		effect: {
			'th-th': "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x120",
			'id-id': "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 120 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "120×",
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

	retreat: 3,
	regulationMark: "I"
}

export default card