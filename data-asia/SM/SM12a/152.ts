import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュジュベ&ハチクマン",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "おたがいの山札を上から3枚ずつトラッシュする。追加で、このカードを使うときに、自分の手札を3枚トラッシュしてよい。その場合、おたがいのプレイヤーは、それぞれ自分のベンチポケモンが3匹になるまでポケモンをトラッシュする。（トラッシュは相手から行う。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544396,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "None",
};

export default card;
