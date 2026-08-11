import { Card } from "models/database/card";
import Set from "../M2a";

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
			type: "normal",
			thirdParty: {
				cardmarket: 861421,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "None",
};

export default card;
