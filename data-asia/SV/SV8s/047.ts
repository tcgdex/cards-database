import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Bruxish",
		th: "ฮากิกิชิริ"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		id: "Ketika cahaya matahari terpantul dengan gelombang yang dihasilkan oleh gemeretak gigi Bruxish, air di sekitarnya akan berkilau dengan warna psikedelik.",
		th: "พอแสงอาทิตย์กระทบกับระลอกคลื่นที่เกิดจากการขบฟัน น้ำรอบ ๆ จะ ส่องประกายระยิบระยับ"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Serangan Balasan",
			th: "ตีตอบโต้"
		},

		effect: {
			id: "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 3 Token Kerusakan pada Pokémon yang telah menggunakan serangan.",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอน ฝ่ายตรงข้าม วางตัวนับแดเมจ 3 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้"
		}
	}],

	attacks: [{
		name: {
			id: "Menggerogoti Erat-erat",
			th: "กัด"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card