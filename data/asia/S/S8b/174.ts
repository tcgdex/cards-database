import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "スピード雷エネルギー",
		'zh-tw': "高速雷能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[雷]エネルギー1個ぶんとしてはたらく。このカードを手札から[雷]ポケモンにつけたとき、自分の山札を2枚引く。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【雷】能量。 當從手牌將這張卡附於【雷】寶可夢身上時，從自己的牌庫抽出2張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586690,
				tcgplayer: 571426,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578452,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
