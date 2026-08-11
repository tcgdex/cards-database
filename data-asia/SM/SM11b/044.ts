import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "イツキ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "この番、このカードを使ったあとに、ワザ・特性・トレーナーズの効果で自分が次に投げるコインは、最初の1回だけ、オモテかウラか選べる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555234,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
