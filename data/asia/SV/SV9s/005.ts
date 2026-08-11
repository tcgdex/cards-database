import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "พาราเซ็คท์",
		id: "Parasect"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		th: "ยิ่งเห็ดบนหลังเติบโตขึ้นมากเท่าไหร่ฤทธิ์ของสปอร์เห็ดที่ถูกโปรยออก มาจะยิ่งรุนแรงขึ้นเท่านั้น",
		id: "Makin bertumbuh jamur di punggungnya, makin kuat juga efek spora jamur yang disebarkan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "สปอร์เห็ด",
			id: "Spora Jamur"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "ซิสเซอร์สวิง",
			id: "Scissor Swing"
		},

		effect: {
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเพิ่มตามจำนวนครั้งที่ออกหัว x30",
			id: "Lempar koin 2 kali. Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
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