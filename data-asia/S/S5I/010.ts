import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暖暖豬",
		th: "โพคาบู"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "最喜歡吃烤過的樹果，但有時候會因為興奮過頭，把樹果烤得焦黑。",
		th: "ชอบกินผลไม้เผา แต่เพราะตื่นเต้นมากเกินไป ทำให้บางครั้งไหม้จนเกรียม"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			th: "กระแทก"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "烈焰",
			th: "เผาไหม้"
		},

		damage: 50,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card