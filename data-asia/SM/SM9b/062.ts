import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "マーレイン",
	},

	illustrator: "Masakazu Fukuda",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札にある[鋼]エネルギーを2枚トラッシュしなければ使えない。自分のトラッシュにあるトレーナーズを1枚、相手に見せてから、山札にもどして切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558180,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
