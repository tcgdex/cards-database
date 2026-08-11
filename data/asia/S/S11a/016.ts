import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "フォッコ",
		'zh-tw': "火狐狸",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "小枝を 持ち歩き おやつがわりに ポリポリ 食べる。 耳から 熱気を 噴き出して 相手を 威嚇する。",
		'zh-tw': "隨身帶著小樹枝，卡滋卡滋地當零食吃。會從耳朵噴出熱氣來威嚇對手。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みちびく",
				'zh-tw': "引路",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ひだね",
				'zh-tw': "火種",
			},
			damage: 10,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673013,
				tcgplayer: 570779,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570869,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [653],
};

export default card;
