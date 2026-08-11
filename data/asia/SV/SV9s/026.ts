import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ดารุมักกะ <ของ N>",
		id: "Darumaka <N>"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		th: "ในขณะที่หลับอยู่ไม่ว่าจะดึงหรือผลักยังไงก็ไม่ล้ม เป็นลวดลายของ เครื่องรางนำโชคที่ได้รับความนิยมสูง",
		id: "Saat sedang tidur, Darumaka tidak akan terguling meskipun didorong atau ditarik. Populer sebagai simbol benda pembawa keberuntungan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กลิ้งโจมตี",
			id: "Tubrukan Menggelinding"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "ไฟ",
			id: "Api"
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