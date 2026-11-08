import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ดารุมักกะ <ของ N>",
		'id-id': "Darumaka <N>"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'th-th': "ในขณะที่หลับอยู่ไม่ว่าจะดึงหรือผลักยังไงก็ไม่ล้ม เป็นลวดลายของ เครื่องรางนำโชคที่ได้รับความนิยมสูง",
		'id-id': "Saat sedang tidur, Darumaka tidak akan terguling meskipun didorong atau ditarik. Populer sebagai simbol benda pembawa keberuntungan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กลิ้งโจมตี",
			'id-id': "Tubrukan Menggelinding"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "ไฟ",
			'id-id': "Api"
		},

		damage: 50,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card