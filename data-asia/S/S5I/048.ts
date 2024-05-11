import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大嘴娃",
		th: "คูชีท"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "大嘴娃能用自己那由鋼角變化而成的巨大顎部將對手一口緊緊咬住。",
		th: "กัดงับฝ่ายตรงข้ามด้วยกรามใหญ่ที่เปลี่ยนรูปร่างมาจากเขาเหล็ก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "虎鉗剪",
			th: "พลังหนีบช้างสาร"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [ชา]"
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "打穿",
			th: "ทะลุทะลวง"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力、對手的戰鬥寶可夢身上的附加效果。",
			th: "แดเมจจากท่าต่อสู้นี้ จะไม่นำจุดอ่อน ความต้านทาน และเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามมาคิด"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card