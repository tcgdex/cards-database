import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ロトム",
		'zh-tw': "洛托姆"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [479],
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。",
		'zh-tw': "被當作驅動特殊馬達的動力源， 而被長期研究的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ジャンクハント",
			'zh-tw': "廢品搜尋"
		},

		effect: {
			ja: "自分のトラッシュからグッズを1枚選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇1張物品卡，在給對手看過後加入手牌。"
		}
	}, {
		cost: ["Lightning"],

		name: {
			ja: "でんきショック",
			'zh-tw': "電擊"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
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