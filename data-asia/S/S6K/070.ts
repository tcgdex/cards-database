import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ラッキーエネルギー",
		'zh-tw': "幸運能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[無]エネルギー1個ぶんとしてはたらく。このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、自分の山札を1枚引く。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。當附有這張卡的寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，從自己的牌庫抽出1張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560858,
				tcgplayer: 569298,
			},
		},
	],

	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
