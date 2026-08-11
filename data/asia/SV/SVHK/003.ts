import { Card } from "../../../interfaces"
import Set from "../SVHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆焰龜獸",
		th: "บาคุกาเมส",
		id: "Turtonator"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "背上的甲殼上敷了炸藥。會用大爆炸去回擊 來攻擊自己的敵人。",
		th: "แบกกระดองที่ถูกเคลือบด้วยดินระเบิด เอาคืนคู่ต่อสู้ที่โจมตีมาด้วยระเบิดยักษ์",
		id: "Turtonator menggendong tempurung yang dilapisi oleh bahan peledak. Jika diserang musuh, ia akan membalas dengan ledakan dahsyat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吐出射擊",
			th: "ปล่อยกระสุน",
			id: "Tembakan Muntah"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢受到40點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจ 40 กับโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini memberikan kerusakan sejumlah 40 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "爆熱炮",
			th: "ปืนใหญ่ระเบิดร้อน",
			id: "Meriam Ledakan Panas"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card