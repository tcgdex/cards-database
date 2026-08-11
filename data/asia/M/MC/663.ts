import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポケモンいれかえ",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンをベンチポケモンと入れ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863965,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
