import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "ซาโบเนีย",
		id: "Cacnea"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		th: "ชอบอยู่ในสภาพแวดล้อมที่โหดร้าย เช่น ทะเลทราย น้ำที่สะสมในร่างกายสามารถหล่อเลี้ยงชีวิตให้อยู่ได้ 30 วัน",
		id: "Cacnea menyukai lingkungan yang keras seperti padang pasir dan lainnya. Pokémon ini dapat hidup selama 30 hari hanya dengan air yang ditampung di dalam tubuhnya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			th: "หนามโต้กลับ",
			id: "Jarum Serangan Balasan"
		},

		effect: {
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจ 3 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			id: "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 3 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			th: "ทุบตี",
			id: "Memukul"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card