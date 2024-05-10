import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "テッシード",
		'zh-tw': "種子鐵球",
		th: "เทสซีด"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [597],
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "苔むした 洞窟を 好む。 苔が 含む 酵素が 棘を 大きく 丈夫に 育むのだ。",
		'zh-tw': "偏愛長著青苔的洞窟。青苔中所含的酵素能使牠的 尖刺成長得又大又結實。",
		th: "ชอบถ้ำที่ปกคลุมไปด้วยมอส เอนไซม์ที่มีมอสปนอยู่นั้นช่วยเลี้ยงหนามให้ใหญ่และแข็งแรง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "トゲでさす",
			'zh-tw': "針刺",
			th: "แทงด้วยหนาม"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card