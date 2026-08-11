import { Card } from "../../../interfaces";
import Set from "../SM2K";

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
				cardmarket: 561514,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
