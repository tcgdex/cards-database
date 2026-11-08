import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "พาราเซ็คท์",
		'id-id': "Parasect"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'th-th': "ยิ่งเห็ดบนหลังเติบโตขึ้นมากเท่าไหร่ฤทธิ์ของสปอร์เห็ดที่ถูกโปรยออก มาจะยิ่งรุนแรงขึ้นเท่านั้น",
		'id-id': "Makin bertumbuh jamur di punggungnya, makin kuat juga efek spora jamur yang disebarkan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "สปอร์เห็ด",
			'id-id': "Spora Jamur"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ซิสเซอร์สวิง",
			'id-id': "Scissor Swing"
		},

		effect: {
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเพิ่มตามจำนวนครั้งที่ออกหัว x30",
			'id-id': "Lempar koin 2 kali. Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "60+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card