import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "อาจิเกเตอร์",
		id: "Crocalor"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		th: "พลังงานไฟและพลังชีวิตที่มากล้นนั้นผสมผสานกันทำให้เกิดลูกไฟรูปไข่ขึ้นเหนือหัว",
		id: "Bola api berbentuk telur yang muncul di kepala Crocalor terbentuk oleh campuran energi api dan vitalitasnya yang melimpah."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ลูกไฟกลิ้ง",
			id: "Gelinding Bola Api"
		},

		effect: {
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก นำกลับขึ้นมือ",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu kembalikan ke Kartu Pegangan."
		},

		damage: 90,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card