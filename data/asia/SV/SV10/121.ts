import { Card } from "models/database/card";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のサカキ",
	},

	illustrator: "akagi",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトル場の「ロケット団のポケモン」を、ベンチの「ロケット団のポケモン」と入れ替える。その後、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821953,
				tcgplayer: 629062,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
