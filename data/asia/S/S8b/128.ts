import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ポワルン",
		'zh-tw': "飄浮泡泡",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "天気に よって 姿が 変わる。 気象が 荒くなるほど 気性も 荒っぽく なってくる。",
		'zh-tw': "樣子會隨著天氣而變化。天氣越是惡劣，性情就會變得越粗暴。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "てんきよみ",
				'zh-tw': "看天",
			},
			effect: {
				ja: "自分のトラッシュに「スタジアム」が8枚以上あるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
				'zh-tw': "若自己的棄牌區有8張以上的「競技場」卡，則這隻寶可夢使用招式所需的能量全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ウェザーフォース",
				'zh-tw': "氣象之力",
			},
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の手札が6枚になるように、山札を引く。",
				'zh-tw': "從牌庫抽卡直到自己的手牌滿6張為止。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586644,
				tcgplayer: 571381,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578410,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "None",
	dexId: [351],
};

export default card;
