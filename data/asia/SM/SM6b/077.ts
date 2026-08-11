import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "モノマネむすめ",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、相手の手札の枚数ぶん、自分の山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559227,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
