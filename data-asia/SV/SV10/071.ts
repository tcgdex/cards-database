import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>黑暗鴉",
		'zh-cn': "<火箭隊的>黑暗鴉",
		ja: "ロケット団のヤミカラス"
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "人們相信晚上看到牠 就會發生不吉利的事， 這讓牠成了人見人厭的寶可夢。",
		'zh-cn': "人們相信晚上看到牠 就會發生不吉利的事， 這讓牠成了人見人厭的寶可夢。",
		ja: "夜 姿を 見かけると 不吉なことが 起きると 信じられ 忌み嫌われている ポケモン。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "誑騙",
			'zh-cn': "誑騙",
			ja: "たぶらかす"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "無理取鬧",
			'zh-cn': "無理取鬧",
			ja: "いちゃもん"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢持有的招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。",
			'zh-cn': "選擇1個對手的戰鬥寶可夢持有的招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。",
			ja: "相手のバトルポケモンが持つワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [198]
}

export default card