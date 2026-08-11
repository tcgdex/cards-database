import { Card } from "models/database/card"
import Set from "../SVHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "岩狗狗",
		'th-th': "อิวังโค",
		'id-id': "Rockruff"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "年幼時期非常容易親近。雖然長大後脾氣會變得粗暴， 卻絕不會忘記主人的恩情。",
		'th-th': "ตอนยังเล็กค่อนข้างเชื่อง พอโตแล้วดุร้ายขึ้น แต่ไม่ลืมบุญคุณเจ้าของ",
		'id-id': "Rockruff sangat jinak saat masih kecil. Meskipun tumbuh menjadi kasar, Pokémon ini tidak pernah melupakan kebaikan pemiliknya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "握手拳",
			'th-th': "หมัดมือ",
			'id-id': "Pukulan Jabat Tangan"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card