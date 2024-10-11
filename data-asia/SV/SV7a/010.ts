import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幾何雪花",
		'zh-cn': "幾何雪花",
		ja: "フリージオ"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "會用冰製的鎖鏈 把對手勒緊之後， 就這樣一口氣凍成冰塊。",
		'zh-cn': "會用冰製的鎖鏈 把對手勒緊之後， 就這樣一口氣凍成冰塊。",
		ja: "氷で できた 鎖を 使い 相手を 締め上げると そのまま 一気に 凍らせてしまうのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚信號",
			'zh-cn': "呼喚信號",
			ja: "コールサイン"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "冰凍光束",
			'zh-cn': "冰凍光束",
			ja: "れいとうビーム"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [615]
}

export default card