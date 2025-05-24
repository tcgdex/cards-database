import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "กิกิเกียร์ <ของ N>",
		id: "Klinklang <N>"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		th: "โจมตีด้วยกระแสไฟฟ้าแรงสูงจากปลายหนาม สะสมพลังงานจำนวน มากไว้ที่แกนกลางสีแดง",
		id: "Klinklang menembakkan listrik yang kuat dari ujung durinya. Inti tubuh merahnya menyimpan banyak energi."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "แมกเน็ทบลาสต์",
			id: "Magnetic Blast"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ทริปเปิลสแมช",
			id: "Triple Smash"
		},

		effect: {
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x120",
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 120 untuk tiap lemparan dengan hasil sisi depan."
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