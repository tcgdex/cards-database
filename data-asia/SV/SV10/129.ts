import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のサカキ",
	},

	illustrator: "Krgc",
	category: "Trainer",

	effect: {
		ja: "自分のバトル場の「ロケット団のポケモン」を、ベンチの「ロケット団のポケモン」と入れ替える。その後、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821961,
				tcgplayer: 629070,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
