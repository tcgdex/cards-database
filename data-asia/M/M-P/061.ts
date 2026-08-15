import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "フィールドブロアー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "場にある「ポケモンのどうぐ」または「スタジアム」を、2枚までトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864273,
				tcgplayer: 684568,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "A",
	rarity: "Promo",
};

export default card;
