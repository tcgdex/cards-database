import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "マオ&スイレン",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。追加で、このカードを使うときに、自分の手札を2枚トラッシュしてよい。その場合、ベンチに入れ替えたポケモンのHPを「120」回復する。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555081,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
