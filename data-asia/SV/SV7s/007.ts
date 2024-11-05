import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "บาชูรุ",
		id: "Joltik"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		th: "ดูดไฟฟ้าสถิตที่ติดร่างของโปเกมอน ไม่สามารถสร้างไฟฟ้าได้ด้วยตัวเอง",
		id: "Joltik menempel di tubuh Pokémon lain dan mengisap listrik statis. Ia tidak dapat membuat listrik sendiri."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กระโดดหนี",
			id: "Lompat Menghindar"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
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