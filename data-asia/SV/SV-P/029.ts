import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "コルサ",
		'zh-tw': "故勒頓",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		ja: "自分の手札を数えたあと、すべて山札にもどして切る。その後、もどした枚数より1枚多くなるように、山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693190,
				tcgplayer: 587786,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
