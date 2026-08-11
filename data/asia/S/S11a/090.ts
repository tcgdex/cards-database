import { Card } from "models/database/card";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ふりそで",
	},

	illustrator: "saino misaki",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。のぞむなら、出したポケモンとバトルポケモンを入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673407,
				tcgplayer: 570853,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Holo Rare",
};

export default card;
