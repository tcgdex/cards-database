import { Card } from "../../../interfaces";
import Set from "../SM9";

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
			type: "holo",
			thirdParty: {
				cardmarket: 558468,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "A",
	rarity: "Rare Holo",
};

export default card;
