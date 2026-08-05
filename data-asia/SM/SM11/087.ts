import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "グリーンの戦略",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "このカードを使った番の終わりに、自分の手札が8枚になるように、山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557049,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
