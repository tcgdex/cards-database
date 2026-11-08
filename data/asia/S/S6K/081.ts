import { Card } from "models/database/card";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キクコ",
	},

	illustrator: "NC Empire",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンにのっているダメカンを3個まで選び、相手のバトルポケモンにのせ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560982,
				tcgplayer: 569309,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
