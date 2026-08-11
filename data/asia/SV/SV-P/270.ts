import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のサカキ",
	},

	illustrator: "DOM",
	category: "Trainer",

	effect: {
		ja: "自分のバトル場の「ロケット団のポケモン」を、ベンチの「ロケット団のポケモン」と入れ替える。その後、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 827162,
				tcgplayer: 639660,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
