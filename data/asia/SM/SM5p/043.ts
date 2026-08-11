import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "こだわりハチマキ",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のバトル場の「ポケモンGX・EX」へのダメージは「+30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559793,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
