import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "マオ&スイレン",
		'zh-tw': "竹蘭",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。追加で、このカードを使うときに、自分の手札を2枚トラッシュしてよい。その場合、ベンチに入れ替えたポケモンのHPを「120」回復する。",
		'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出6張。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463219,
				tcgplayer: 597299,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Promo",
};

export default card;
