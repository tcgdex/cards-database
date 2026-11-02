import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "クロススイッチャー",
		'zh-tw': "交錯切換機",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		ja: "「クロススイッチャー」は、2枚同時にしか使えない。（効果は、2枚で1回はたらく。）相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、自分のバトルポケモンをベンチポケモンと入れ替える。",
		'zh-tw': "「交錯切換機」只可2張同時使用。（效果是2張生效1次。）選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，將自己的戰鬥寶可夢與備戰寶可夢互換。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575645,
				tcgplayer: 569591,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
