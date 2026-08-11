import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カキツバタ",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から7枚見て、その中からポケモンとトレーナーズを1枚ずつ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
