import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โกลแบท",
		'id-id': "Golbat"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'th-th': "เลือดของสิ่งมีชีวิตคือของโปรด กล่าวกันว่ามีการแบ่งเลือดที่สูบมาได้ให้กับเพื่อนพ้องที่หิวโหยด้วย",
		'id-id': "Cairan darah makhluk hidup adalah makanan favoritnya. Kabarnya Golbat kadang juga membagikan darah yang telah diisap kepada sesamanya yang kelaparan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "บินเร็วจี๋",
			'id-id': "Terbang Cepat"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			'th-th': "ดาบทมิฬ",
			'id-id': "Pisau Hitam Kelam"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 80,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card