import { Card } from "models/database/card";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のアテナ",
	},

	illustrator: "Yoshioka",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札が5枚になるように、山札を引く。自分の場のポケモン全員が「ロケット団のポケモン」なら、8枚になるように引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821960,
				tcgplayer: 629069,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
