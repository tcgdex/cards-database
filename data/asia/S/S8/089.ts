import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "クロスシーバー",
		'zh-tw': "交錯收發機",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "「クロスシーバー」は、2枚同時にしか使えない。（効果は、2枚で1回はたらく。）自分のトラッシュからポケモンまたはサポートを1枚選び、相手に見せて、手札に加える。",
		'zh-tw': "「交錯收發機」只可2張同時使用。（效果是2張生效1次。） 從自己的棄牌區選擇1張寶可夢卡或者支援者卡，在給對手看過後加入手牌。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575644,
				tcgplayer: 569590,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
