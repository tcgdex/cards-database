import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "げんきのハチマキ",
		'zh-tw': "波加曼",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「＋10」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525360,
				tcgplayer: 597335,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
