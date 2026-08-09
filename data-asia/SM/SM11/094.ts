import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "かんこうきゃく",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "自分の手札が5枚になるように、山札を引く。のぞむなら、山札を引く前に、自分の手札を好きなだけトラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557056,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
