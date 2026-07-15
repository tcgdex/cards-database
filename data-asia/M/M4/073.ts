import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "大漁ネット",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから[W]ポケモンと「基本[W]エネルギー」をそれぞれ3枚まで選び、相手に見せて、山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876972,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
