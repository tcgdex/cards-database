import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "ลัคกี",
		id: "Chansey"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		th: "เดินอย่างระวังเพื่อไม่ให้ไข่ที่มีอยู่แตก แต่ตอนหนีจะหนีไวมาก",
		id: "Chansey selalu berjalan dengan hati-hati agar telur yang dibawanya tidak pecah. Tapi, Pokémon ini melarikan diri dengan cepat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ปัด",
			id: "Tumbuk"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "กลิ้งไข่",
			id: "Menggelindingkan Telur"
		},

		effect: {
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x60",
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 60 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "60×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card