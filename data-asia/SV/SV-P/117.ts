import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "レホール",
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から5枚見て、その中からカードを好きなだけ選び、トラッシュする。残りのカードは好きな順番に入れ替えて、山札の上にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 740418,
				tcgplayer: 587867,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
