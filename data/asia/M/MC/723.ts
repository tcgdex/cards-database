import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ベルのまごころ",
	},

	illustrator: "En Morikura",
	category: "Trainer",

	effect: {
		ja: "残りHPが「30」以下の自分のポケモン1匹のHPを、すべて回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864025,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
