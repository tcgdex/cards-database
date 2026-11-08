import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "探検家の先導",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から6枚見て、その中からカードを2枚選び、手札に加える。残りのカードはトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752848,
				tcgplayer: 568401,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
