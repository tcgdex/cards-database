import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "エレズン",
		'zh-tw': "毒電嬰",
		th: "เอเลซัน",
		id: "Toxel"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [848],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "わがままで とても 甘えん坊。 体内の ２つの 袋に 毒と 電気を それぞれ 溜める。",
		'zh-tw': "任性且非常愛撒嬌。體內的兩個囊袋 分別儲存著毒和電。",
		th: "เอาแต่ใจและขี้อ้อนมาก ภายในร่างกายมีถุง 2 ถุง เป็นถุงสำหรับสะสมพิษและไฟฟ้าอย่างละถุง",
		id: "Toxel egois dan sangat manja. Pokémon ini menyimpan racun dan listrik secara masing-masing pada 2 kantong yang ada di dalam tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かじる",
			'zh-tw': "咬",
			th: "แทะ",
			id: "Menggerogot"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card