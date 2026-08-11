import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デンジャラス光線",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のバトルポケモンをやけどとこんらんにする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863949,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",
};

export default card;
