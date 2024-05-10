import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "バチュル",
		'zh-tw': "電電蟲",
		th: "บาชูรุ"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [595],
	hp: 40,
	types: ["Lightning"],

	description: {
		ja: "ほかの ポケモンに とりついて 静電気を 吸い取る。 ワンパチの お尻に よく くっついている。",
		'zh-tw': "會附在其他寶可夢身上吸取靜電。經常會把自己 貼在來電汪的屁股上。",
		th: "ดูดกินไฟฟ้าสถิตที่ติดอยู่กับโปเกมอนตัวอื่น มักจะติดอยู่ที่ก้นของวันปาจิ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "はねまくる",
			'zh-tw': "躍動",
			th: "สะบัดกระจาย"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card