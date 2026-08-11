import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "フィールドブロアー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "場にある「ポケモンのどうぐ」または「スタジアム」を、2枚までトラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561526,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
