import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อุมิทริโอ",
		'id-id': "Wugtrio"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'th-th': "มีนิสัยโหดร้ายขัดกับรูปลักษณ์ภายนอก ใช้ร่างกายที่ยาวของมันกอดรัดเหยื่อและลากเข้าไปในรัง",
		'id-id': "Berbanding terbalik dengan penampilannya, sifat Wugtrio kasar. Dengan tubuh panjangnya, Pokémon ini melilit dan menarik mangsa ke dalam sarangnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "จับม้วนบิด",
			'id-id': "Belit dan Peras"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 50,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card