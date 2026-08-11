import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ちからのハチマキ",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 804758,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Promo",
};

export default card;
