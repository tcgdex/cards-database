import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เนียวฮะ",
		id: "Sprigatito"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		th: "ขนตามร่างกายที่นุ่มฟูมีส่วนประกอบที่คล้ายกับพืช ล้างหน้าบ่อยครั้ง เพื่อป้องกันไม่ให้หน้าแห้ง",
		id: "Bulu Sprigatito yang halus mengandung komponen yang dekat dengan tumbuhan. Pokémon ini rajin mencuci mukanya agar tidak kering."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เหยียบไม่เลิก",
			id: "Injak Terus"
		},

		effect: {
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card