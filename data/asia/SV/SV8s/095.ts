import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Mankey",
		th: "แมนคี"
	},

	illustrator: "Apios",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		id: "Meskipun kondisi hatinya biasanya baik, Mankey menakutkan karena ia akan tiba-tiba mengamuk hanya karena hal kecil.",
		th: "ปกติจะอารมณ์ดี แต่น่ากลัวตรงที่ถ้ามีอะไรไปสะกิดนิดหน่อยก็จะ อาละวาดขึ้นมาทันที"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tebasan Ganda",
			th: "ดับเบิลช็อป"
		},

		effect: {
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan.",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card