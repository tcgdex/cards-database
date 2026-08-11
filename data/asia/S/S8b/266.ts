import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "博士の研究",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべてトラッシュし、山札を7枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587064,
				tcgplayer: 577554,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Ultra Rare",
};

export default card;
