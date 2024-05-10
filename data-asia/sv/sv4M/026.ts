import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "エレズン",
		'zh-tw': "毒電嬰",
		th: "เอเลซัน"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [848],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "わがままで とても 甘えん坊。 体内の ２つの 袋に 毒と 電気を それぞれ 溜める。",
		'zh-tw': "任性且非常愛撒嬌。體內的兩個囊袋分別儲存著毒和電。",
		th: "เอาแต่ใจและขี้อ้อนมาก ภายในร่างกายมีถุง 2 ถุง เป็นถุงสำหรับสะสมพิษและไฟฟ้าอย่างละถุง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "きまぐれタックル",
			'zh-tw': "胡思亂撞",
			th: "โจมตีแปรปรวน"
		},

		damage: 60,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card