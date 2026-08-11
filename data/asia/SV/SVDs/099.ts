import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ยาโทโมริ",
		'id-id': "Salandit"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'th-th': "ยั่วยุและหลอกล่อเหยื่อให้เข้าไปในซอกหินแคบ ๆ แล้วพ่นแก๊สพิษที่จะทำให้โซเซใส่ก่อนจัดการอีกฝ่าย",
		'id-id': "Salandit menantang lawan dan memancingnya ke celah bebatuan yang sempit. Lalu, Pokémon ini mengeluarkan gas beracun yang membuat sempoyongan dan menghabisi lawannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ห่อหุ้มด้วยแก๊ส",
			'id-id': "Gas yang Menyelimuti"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'th-th': "ข่วน",
			'id-id': "Menggaruk"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card