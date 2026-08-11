import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คาบิกอน <ของฮ็อป>",
		'id-id': "Snorlax <Hop>"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'th-th': "จอมตะกละที่กินอาหารตลอดเวลานอกจากเวลาหลับ ฟาดอาหารถึง 400 กิโลกรัมใน 1 วัน",
		'id-id': "Ia merupakan Pokémon rakus yang selalu makan kecuali saat sedang tidur. Makanan sebanyak 400 kg pun dimakan habis dalam sehari."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "ใจกว้าง",
			'id-id': "Dermawan"
		},

		effect: {
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ แดเมจของท่าต่อสู้ที่ [โปเกมอนของฮ็อป] ฝ่ายเรา ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+30] แม้จะมีโปเกมอน ที่มีความสามารถนี้กี่ตัวก็ตาม เอฟเฟกต์นี้จะไม่เกิดผลซ้ำ",
			'id-id': "Selama Pokémon ini ada di Arena, kerusakan akibat serangan yang digunakan oleh Pokémon Hop sendiri kepada Pokémon Bertarung lawan bertambah sejumlah 30. Efek ini tidak berlaku kelipatan meskipun ada Pokémon lain yang memiliki Ability yang sama."
		}
	}],

	attacks: [{
		name: {
			'th-th': "ไดนามิกเพรส",
			'id-id': "Dynamic Press"
		},

		effect: {
			'th-th': "‌โปเกมอนนี้ก็จะได้รับแดเมจ 80 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 80."
		},

		damage: 140,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I"
}

export default card