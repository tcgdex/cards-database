import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เวลโกะ",
		id: "Wailmer"
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		th: "เมื่อดื่มน้ำทะเลเข้าไปมาก ๆ ร่างกายจะเด้งได้เหมือนลูกบอล กิน อาหารวันละ 1 ตัน",
		id: "Ketika meminum banyak air laut, tubuh Wailmer dapat memantul bagai bola. Tiap hari memakan 1 ton makanan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "โต้คลื่น",
			id: "Berselancar"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card