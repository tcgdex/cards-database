import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "でんきだま",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「ピカチュウex」が使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+50」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861406,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "None",
};

export default card;
