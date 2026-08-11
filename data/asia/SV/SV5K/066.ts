import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マキシマムベルト",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+50」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752847,
				tcgplayer: 568400,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "ACE SPEC Rare",
};

export default card;
