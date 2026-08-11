import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "บาชูรุ",
		'id-id': "Joltik"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'th-th': "ดูดไฟฟ้าสถิตที่ติดร่างของโปเกมอน ไม่สามารถสร้างไฟฟ้าได้ด้วยตัวเอง",
		'id-id': "Joltik menempel di tubuh Pokémon lain dan mengisap listrik statis. Ia tidak dapat membuat listrik sendiri."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กระโดดหนี",
			'id-id': "Lompat Menghindar"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card