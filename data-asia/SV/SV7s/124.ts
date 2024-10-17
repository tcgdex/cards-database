import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เปอร์เซียน",
		id: "Persian"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		th: "ระวังตอนอารมณ์รุนแรงจนตั้งหางตรงให้ดี เป็นสัญญาณบอกว่ามันกำลังจะกระโจนเข้ากัด",
		id: "Persian memiliki sifat yang kasar. Hati-hati jika ekor Pokémon ini berdiri tegak. Itu adalah pertanda ia akan menerjang dan menggigitmu."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ข่วนแหลก",
			id: "Cakaran Kacau"
		},

		effect: {
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x50",
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 50 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "50×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "สแลชคลอว์",
			id: "Cakar Penebas"
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