import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "穴掘り兄弟",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げる。オモテなら8枚、ウラなら3枚、自分の山札を下から見て、その中からカードを1枚選び、手札に加える。残りのカードは山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 666789,
				tcgplayer: 597473,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Promo",
};

export default card;
