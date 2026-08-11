import { Card } from "../../../interfaces";
import Set from "../SM7a";

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
			type: "normal",
			thirdParty: {
				cardmarket: 558944,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Common",
};

export default card;
