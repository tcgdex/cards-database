import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>尼多娜",
		'zh-cn': "<火箭隊的>尼多娜",
		ja: "ロケット団のニドリーナ"
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'zh-tw': "有危險逼近群體時， 會與夥伴們團結一致地 用超音波的大合唱來攻擊。",
		'zh-cn': "有危險逼近群體時， 會與夥伴們團結一致地 用超音波的大合唱來攻擊。",
		ja: "群れに 危険が せまると 仲間で 結束して 超音波の 大合唱を おみまいするぞ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "惡之覺醒",
			'zh-cn': "惡之覺醒",
			ja: "あくのめざめ"
		},

		effect: {
			'zh-tw': "選擇最多2隻自己的【惡】寶可夢，從自己的牌庫選擇從那些寶可夢進化而來的卡各1張，放置於各自身上完成進化。並且重洗牌庫。",
			'zh-cn': "選擇最多2隻自己的【惡】寶可夢，從自己的牌庫選擇從那些寶可夢進化而來的卡各1張，放置於各自身上完成進化。並且重洗牌庫。",
			ja: "自分のポケモンを2匹まで選び、そのポケモンから進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "抓",
			'zh-cn': "抓",
			ja: "ひっかく"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [30]
}

export default card