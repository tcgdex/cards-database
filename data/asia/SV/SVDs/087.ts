import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ริโอลุ",
		'id-id': "Riolu"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'th-th': "ใช้คลื่นพลังในการสื่อสารกับพวกเดียวกัน สามารถวิ่งติดต่อกันได้ทั้งคืน",
		'id-id': "Riolu mengeluarkan gelombang aura untuk berkomunikasi dengan kawannya. Pokémon ini dapat terus berlari sepanjang malam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "หมัด",
			'id-id': "Pukulan"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'th-th': "ประจัญบาน",
			'id-id': "Menyerang"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 20."
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