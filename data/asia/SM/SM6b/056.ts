import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ふっかつそう",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'ja-jp': "コインを1回投げオモテなら、自分のポケモン1匹のHPを「60」回復し、特殊状態もすべて回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559206,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
