import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "バトルサーチャー",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからサポートを1枚選び、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864272,
				tcgplayer: 684567,
			},
		},
	],

	trainerType: "Item",
	rarity: "Promo",
};

export default card;
