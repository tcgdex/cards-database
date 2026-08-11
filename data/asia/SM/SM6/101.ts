import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "カルネ",
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分の[妖]ポケモンがきぜつしていなければ使えない。自分のトラッシュにある好きなカードを2枚、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559646,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
