import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "びっくりボックス",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "相手のトラッシュにある好きなカードを1枚、相手の手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558231,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Common",
};

export default card;
