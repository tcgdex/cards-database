import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "นุยโคกุมะ",
		id: "Stufful"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		th: "แนวขนฟูนุ่มรู้สึกสบายอย่างยิ่งเมื่อสัมผัส แต่ถ้าเผลอไปจับจะถูกโจมตีกลับอย่างรุนแรง",
		id: "Bulu Stufful yang lembut sangat enak untuk disentuh, tetapi jika tidak hati-hati saat menyentuhnya, mungkin ia akan melawan dan melukaimu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "พุ่งเข้าใส่",
			id: "Menerjang"
		},

		effect: {
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card