import { Card } from "models/database/card";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウォロ",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のベンチの「ポケモンV」を1匹選び、そのポケモンと、ついているすべてのカードを、トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657072,
				tcgplayer: 570756,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Holo Rare",
};

export default card;
