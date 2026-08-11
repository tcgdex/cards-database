import { Card } from "models/database/card"
import Set from "../SVAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "湧躍鴨",
		'th-th': "เวลคาโมะ",
		'id-id': "Quaxwell"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "會在淺灘不斷跑步來鍛鍊下盤的筋骨，好跟夥伴們 競爭誰的腿技最為華麗。",
		'th-th': "ขยันวิ่งไปมาบริเวณน้ำตื้นเพื่อให้ขาและสะโพกแข็งแรง แข่งความงดงามของเทคนิคการใช้ขากับพวกพ้อง",
		'id-id': "Quaxwell melatih kaki dan pinggangnya dengan terus berlari di perairan dangkal. Pokémon ini saling mengadu keindahan teknik serangan kaki dengan sesamanya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "潑水",
			'th-th': "สาดน้ำ",
			'id-id': "Guyuran Air"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "迴轉踢",
			'th-th': "หมุนตัวเตะ",
			'id-id': "Tendangan Berputar"
		},

		damage: 70,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card