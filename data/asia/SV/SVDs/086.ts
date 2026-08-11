import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "อุซกกี",
		id: "Sudowoodo"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		th: "แสร้งเป็นต้นไม้ตลอดเวลา โครงสร้างร่างกายเหมือนหินมากกว่าพืช",
		id: "Sudowoodo selalu berpura-pura menjadi pohon. Struktur tubuh Pokémon ini lebih mirip dengan batu dan bebatuan lainnya daripada tumbuhan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ทุบตีแล้วหนีซ่อน",
			id: "Memukul dan Bersembunyi"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			th: "ตีศอก",
			id: "Menyikut"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card