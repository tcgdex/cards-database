import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "モココ",
		'zh-tw': "茸茸羊",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "ふかふかの 毛に 電気を ためこむ。 蓄えすぎて ところどころ つるつるに 禿げあがって しまった。",
		'zh-tw': "會將電力儲存在鬆軟的毛中。因為儲存了太多電力，身上有些地方變得光禿禿的。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "エレキダイナモ",
				'zh-tw': "電氣發電機",
			},
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュから[雷]エネルギーを1枚選び、ベンチポケモンにつける。",
				'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【雷】能量卡，附於備戰寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "エレキボール",
				'zh-tw': "電球",
			},
			damage: 50,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586568,
				tcgplayer: 571305,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578381,
			},
		},
	],

	evolveFrom: {
		ja: "メリープ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [180],
};

export default card;
