import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団のしたっぱ",
	},

	illustrator: "GAME FREAK inc.",
	category: "Trainer",

	effect: {
		ja: "自分の手札を1枚選び、トラッシュする。その後、自分の山札を3枚引く。トラッシュしたカードが「アクア団」のポケモンなら、さらに1枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563748,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
