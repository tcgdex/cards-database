import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "いれかえフロート",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトル場の[水]ポケモンをベンチポケモンと入れ替える。その後、ベンチに入れ替えたポケモンのHPを「30」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559355,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
