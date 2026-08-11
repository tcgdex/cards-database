import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ギフトエネルギー",
		'zh-tw': "禮品能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[C]エネルギー1個ぶんとしてはたらく。このカードをつけているポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の手札が7枚になるように、山札を引く。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 當附有這張卡的寶可夢受到對手的寶可夢招式的傷害而【氣絕】時，從牌庫抽卡直到自己的手牌滿7張為止。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667975,
				tcgplayer: 570031,
			},
		},
	],

	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
