import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "มินีฟ",
		id: "Smoliv"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		th: "ปล่อยน้ำมันออกมาจากผลบนหัวเพื่อปกป้องตัวเองจากศัตรู น้ำมันนั้นทั้งขมและฝาดจนน่าตกใจ",
		id: "Smoliv melindungi diri dari musuh dengan mengeluarkan minyak dari buah di kepalanya. Rasa minyaknya sangat pahit dan sepat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ดูดซับ",
			id: "Menyerap"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]",
			id: "Pulihkan HP Pokémon ini sejumlah 10."
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card