import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เกียร์ <ของ N>",
		'id-id': "Klink <N>"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'th-th': "ร่างทั้งสองมีความคล้ายคลึงกันมากกว่าฝาแฝด หากอยู่กับร่างตัวอื่น จะเข้าขากันได้ไม่ค่อยดีนัก",
		'id-id': "Kedua tubuh Pokémon ini lebih dekat daripada saudara kembar sekalipun. Roda gigi dari tubuh Klink lain tidak bisa masuk dengan pas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ดับเบิลสปิน",
			'id-id': "Double Spin"
		},

		effect: {
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card