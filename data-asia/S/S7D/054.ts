import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ウールー",
		'zh-tw': "毛辮羊",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "毛が 伸びすぎると 動けない。 ウールーの 体毛で 織られた 布は 驚くほど 丈夫。",
		'zh-tw': "要是身上的毛長得太長就會不能動彈。用毛辮羊的體毛織成的布結實得讓人吃驚。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "くつがえす",
				'zh-tw': "阻撓",
			},
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。",
			},
		},
		{
			name: {
				ja: "みんなでころがる",
				'zh-tw': "一同滾動",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチの、ワザ「みんなでころがる」を持つポケモンの数×20ダメージ。",
				'zh-tw': "造成自己的備戰區的，持有「一同滾動」招式的寶可夢的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571642,
				tcgplayer: 569377,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [831],
};

export default card;
