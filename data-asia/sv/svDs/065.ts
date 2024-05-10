import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "ปิปปี",
		id: "Clefairy"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		th: "เป็นโปเกมอนน่ารักที่ได้รับความนิยมเป็นอย่างมากเพราะมีลักษณะท่าทางและเสียงร้องที่น่าเอ็นดู แต่แทบจะไม่ค่อยได้พบเห็น",
		id: "Pokémon dengan tingkah dan suaranya yang imut-imut ini populer karena kemanisannya. Akan tetapi, Clefairy sulit untuk ditemukan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ตบสองครั้ง",
			id: "Menampar Dua Kali"
		},

		effect: {
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "30×",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card