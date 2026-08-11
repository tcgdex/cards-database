import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "ฮิโตคาเงะ",
		id: "Charmander"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		th: "มีหางที่ติดไฟตั้งแต่เกิด หากไฟดับนั่นหมายถึงการจบชีวิต",
		id: "Sejak lahir, api menyala di ekor Charmander. Hidupnya berakhir saat api tersebut padam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ฮีทแท็กเกิล",
			id: "Heat Tackle"
		},

		effect: {
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
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