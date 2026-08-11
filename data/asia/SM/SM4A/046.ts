import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ダッシュポーチ",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンがにげるとき、にげるためのエネルギーはトラッシュせず、自分の手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560293,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
