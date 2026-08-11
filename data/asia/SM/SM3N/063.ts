import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レスキュータンカ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュにあるポケモンを1枚、相手に見せてから、手札に加える。または、自分のトラッシュにあるポケモンを3枚、相手に見せてから、山札にもどして切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561063,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
