import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "いいきずぐすり",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモンを1匹選び、HPを「60」回復する。回復した場合、そのポケモンについているエネルギーを1個選び、トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863936,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
