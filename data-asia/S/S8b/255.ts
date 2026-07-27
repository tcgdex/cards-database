import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アセロラの予感",
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中にあるトレーナーズの枚数ぶん、自分の山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587053,
				tcgplayer: 571507,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
