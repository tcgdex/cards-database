import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "シビシラス",
		'zh-tw': "麻麻小魚",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		ja: "弱い 電気しか だせないので たくさんの シビシラスで 集まり 強力な 電気を 放つ。",
		'zh-tw': "由於只能放出微弱的電，所以會由許多麻麻小魚聚集起來， 放出強大的電流。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "コールサイン",
				'zh-tw': "呼喚信號",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から[L]ポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【雷】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "プチでんき",
				'zh-tw': "小電氣",
			},
			damage: 10,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667914,
				tcgplayer: 569970,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [602],
};

export default card;
