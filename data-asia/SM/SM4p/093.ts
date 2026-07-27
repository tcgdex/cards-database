import { Card } from "../../../interfaces";
import Set from "../SM4p";

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
				cardmarket: 560126,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
