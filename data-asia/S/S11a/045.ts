import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝基拉祈"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "據說牠在１０００年之中只有７天時間會醒過來，使用能實現任何願望的力量。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "託付願望"
		},

		effect: {
			'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【氣絕】時，從自己的牌庫任意選擇最多3張卡加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "星星降災"
		},

		effect: {
			'zh-tw': "擲2次硬幣，若全部為正面，則將對手的戰鬥寶可夢【氣絕】。"
		},

		cost: ["Colorless", "Colorless"]
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
	regulationMark: "F"
}

export default card