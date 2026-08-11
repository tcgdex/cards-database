import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "げんきのハチマキ",
		'zh-tw': "茸茸羊",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「＋10」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 699716,
				tcgplayer: 587776,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
