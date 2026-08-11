import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "リーリエの全力",
	},

	illustrator: "Noriko Uono",
	category: "Trainer",

	effect: {
		ja: "自分の山札を4枚引く。このカードを使った番の終わりに、自分の手札が3枚以上あるなら、その手札が2枚になるように、山札にもどして切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555318,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
