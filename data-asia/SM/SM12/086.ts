import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ビーストナイト",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「ウルトラビースト」が使うワザの、相手のバトルポケモンへのダメージは、自分がすでにとったサイド1枚につき「+10」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555006,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
