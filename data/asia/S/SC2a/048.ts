import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙倍多多冰"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'zh-tw': "當憤怒達到極限時，就會噴出暴風雪，把敵人和夥伴都凍成冰塊。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "寒風刺骨"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "冰霜粉碎"
		},

		damage: 90,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
