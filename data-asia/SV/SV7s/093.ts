import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โซรัว",
		id: "Zorua"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		th: "แปลงกายเป็นคนหรือโปเกมอนตัวอื่น ซ่อนตัวตนที่แท้จริงเพื่อปกป้องตัวเองจากอันตราย",
		id: "Zorua menjelma menjadi manusia atau Pokémon lain. Dengan menyembunyikan identitasnya, Pokémon ini melindungi dirinya dari bahaya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เหยียบ",
			id: "Menginjak"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ข่วนทวีคูณ",
			id: "Cakaran Ganda"
		},

		effect: {
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "20×",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card