import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドリーナ",
		'zh-tw': "<火箭隊的>尼多娜",
		'zh-cn': "<火箭隊的>尼多娜",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "群れに 危険が せまると 仲間で 結束して 超音波の 大合唱を おみまいするぞ。",
		'zh-tw': "有危險逼近群體時， 會與夥伴們團結一致地 用超音波的大合唱來攻擊。",
		'zh-cn': "有危險逼近群體時， 會與夥伴們團結一致地 用超音波的大合唱來攻擊。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "あくのめざめ",
				'zh-tw': "惡之覺醒",
				'zh-cn': "惡之覺醒",
			},
			cost: ["Darkness"],
			effect: {
				ja: "自分の[D]ポケモンを2匹まで選び、そのポケモンから進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。",
				'zh-tw': "選擇最多2隻自己的【惡】寶可夢，從自己的牌庫選擇從那些寶可夢進化而來的卡各1張，放置於各自身上完成進化。並且重洗牌庫。",
				'zh-cn': "選擇最多2隻自己的【惡】寶可夢，從自己的牌庫選擇從那些寶可夢進化而來的卡各1張，放置於各自身上完成進化。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ひっかく",
				'zh-tw': "抓",
				'zh-cn': "抓",
			},
			damage: 50,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821891,
				tcgplayer: 628700,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のニドラン♀",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [30],
};

export default card;
