import { Card } from "models/database/card";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カトレア",
	},

	illustrator: "En Morikura",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札を好きなだけ選び、好きな順番に入れ替えて、山札の下にもどす。その後、もどした枚数ぶん、自分の山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560981,
				tcgplayer: 569308,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
