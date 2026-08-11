import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Duraludon",
		'th-th': "ดิวรัลดอน"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'id-id': "Tubuh logamnya kokoh, tetapi panas cenderung menumpuk sehingga ia selalu mengeluarkan panas dari celah ekornya.",
		'th-th': "ร่างกายที่เป็นโลหะนั้นทนทานมาก แต่เก็บความร้อน มันจึงต้องระบาย ความร้อนออกมาทางร่องที่หาง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menentang",
			'th-th': "ตั้งใจสู้"
		},

		damage: 50,
		cost: ["Metal", "Metal"]
	}, {
		name: {
			'id-id': "Dural Beam",
			'th-th': "ดิวรัลบีม"
		},

		effect: {
			'id-id': "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 130,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card