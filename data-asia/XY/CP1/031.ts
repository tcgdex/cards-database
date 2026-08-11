import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団の秘密基地",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "おたがいのポケモン全員（「アクア団」をのぞく）のにげるために必要なエネルギーは、それぞれ1個ぶん多くなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563751,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
