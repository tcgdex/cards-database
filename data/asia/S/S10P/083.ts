import { Card } from "models/database/card";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カイ",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から[W]ポケモンとグッズをそれぞれ1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651346,
				tcgplayer: 569926,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Holo Rare",
};

export default card;
