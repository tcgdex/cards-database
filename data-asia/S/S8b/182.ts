import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "キャプチャーエネルギー",
		'zh-tw': "捕獲能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[無]エネルギー1個ぶんとしてはたらく。このカードを手札からポケモンにつけたとき、自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 當從手牌將這張卡附於寶可夢身上時，從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586698,
				tcgplayer: 571434,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578460,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
