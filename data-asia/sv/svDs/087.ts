import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "ริโอลุ",
		id: "Riolu"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		th: "ใช้คลื่นพลังในการสื่อสารกับพวกเดียวกัน สามารถวิ่งติดต่อกันได้ทั้งคืน",
		id: "Riolu mengeluarkan gelombang aura untuk berkomunikasi dengan kawannya. Pokémon ini dapat terus berlari sepanjang malam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "หมัด",
			id: "Pukulan"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			th: "ประจัญบาน",
			id: "Menyerang"
		},

		effect: {
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card