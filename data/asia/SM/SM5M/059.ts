import { Card } from "models/database/card";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レスキュータンカ",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュにあるポケモンを1枚、相手に見せてから、手札に加える。または、自分のトラッシュにあるポケモンを3枚、相手に見せてから、山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559872,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
