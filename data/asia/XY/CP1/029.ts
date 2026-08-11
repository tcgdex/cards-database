import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグマ団の幹部",
	},

	illustrator: "GAME FREAK inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュから「マグマ団」のポケモンを3枚選び、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563749,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
