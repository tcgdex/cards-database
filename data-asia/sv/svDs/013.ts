import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "โนโนะคุราเกะ",
		id: "Toedscool"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		th: "มีความคล้ายคลึงกับเมโนคุราเกะแต่ความจริงแล้วเป็นสายพันธุ์ที่ต่างกันโดยสิ้นเชิง แม้จะมีขาเรียวเล็กแต่เมื่อออกวิ่งจะมีความเร็วอยู่ที่ 50 กิโลเมตรต่อชั่วโมง",
		id: "Meskipun mirip dengan Tentacool, Pokémon ini merupakan spesies yang berbeda. Kakinya ramping, tetapi kecepatan lari Toedscool mencapai 50 km/jam ketika berlari."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เตะแหลก",
			id: "Tendangan Tidak Teratur"
		},

		effect: {
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card