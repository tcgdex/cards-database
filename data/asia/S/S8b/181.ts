import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "オーロラエネルギー",
		'zh-tw': "極光能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、手札からポケモンにつけるとき、自分の手札を1枚トラッシュしなければつけられない。このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。",
		'zh-tw': "必須將自己的1張手牌丟棄才可從手牌將這張卡附於寶可夢身上。 只要這張卡附於寶可夢身上，視為提供1個所有屬性的能量。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586697,
				tcgplayer: 571433,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578459,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
