import { Card } from "models/database/card";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "基本草エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561596,
			},
		},
	],

	rarity: "Secret Rare",
};

export default card;
