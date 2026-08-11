import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Simisear",
		'th-th': "บาอกกี"
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'id-id': "Simisear membakar api di dalam tubuhnya, menyebarkan bara api dari kepala dan ekornya untuk menghanguskan musuhnya.",
		'th-th': "จะจุดเปลวเพลิงในร่างกายให้ลุกโชน แล้วโปรยผงไฟจากทางหัวหรือ หางเพื่อเผาศัตรูให้ไหม้เกรียม"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Double Smash",
			'th-th': "ดับเบิลสแมช"
		},

		effect: {
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lemparan dengan hasil sisi depan.",
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x70"
		},

		damage: "70×",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card