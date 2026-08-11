import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ふっかつそう",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "コインを1回投げオモテなら、自分のポケモン1匹のHPを「60」回復し、特殊状態もすべて回復する。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559234,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
