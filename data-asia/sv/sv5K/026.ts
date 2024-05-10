import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "マリル",
		'zh-tw': "瑪力露",
		th: "มาริล",
		'zh-cn': "瑪力露"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [183],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "全身の 体毛は 水を 弾く 性質を 持ち 水浴び しても 乾いている。",
		'zh-tw': "全身的體毛有著能將水彈開的特性， 所以就算碰到水也不會弄濕。",
		th: "ขนทั่วตัวมีคุณสมบัติที่ไม่ดูดซึมน้ำ ถึงอาบน้ำตัวก็ยังแห้ง",
		'zh-cn': "全身的體毛有著能將水彈開的特性， 所以就算碰到水也不會弄濕。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "たまころがり",
			'zh-tw': "滾球",
			th: "กลิ้งบอล",
			'zh-cn': "滾球"
		},

		damage: "10×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			'zh-cn': "擲硬幣直到出現反面，造成正面出現的次數×10點傷害。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "マジカルショット",
			'zh-tw': "魔法射擊",
			th: "เมจิคัลช็อต",
			'zh-cn': "魔法射擊"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card