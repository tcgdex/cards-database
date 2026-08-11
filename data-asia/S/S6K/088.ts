import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "カトレア",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分の手札を好きなだけ選び、好きな順番に入れ替えて、山札の下にもどす。その後、もどした枚数ぶん、自分の山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560988,
				tcgplayer: 569316,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Hyper rare",
};

export default card;
