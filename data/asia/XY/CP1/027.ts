import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団の幹部",
	},

	illustrator: "GAME FREAK inc.",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから基本エネルギーを1枚選び、自分のバトル場にいる「アクア団」のポケモンにつける。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563747,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
