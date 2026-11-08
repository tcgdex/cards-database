import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฮิโตคาเงะ",
		'id-id': "Charmander"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'th-th': "มีหางที่ติดไฟตั้งแต่เกิด หากไฟดับนั่นหมายถึงการจบชีวิต",
		'id-id': "Sejak lahir, api menyala di ekor Charmander. Hidupnya berakhir saat api tersebut padam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ฮีทแท็กเกิล",
			'id-id': "Heat Tackle"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card