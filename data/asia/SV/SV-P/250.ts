import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポケモンセンターのお姉さん",
	},

	illustrator: "Tomowaka",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモンを1匹選び、そのポケモンのHPを「60」回復し、特殊状態もすべて回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 838364,
				tcgplayer: 696782,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
