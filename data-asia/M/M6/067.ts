import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "MCの盛り上げ",
	},

	illustrator: "DOM",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。相手のサイドの残り枚数が3枚以下なら、さらに2枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 900004,
				tcgplayer: 709220,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Common",
};

export default card;
