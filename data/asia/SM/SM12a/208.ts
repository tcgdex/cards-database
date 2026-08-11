import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "基本悪エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544601,
			},
		},
	],

	rarity: "Ultra Rare",
};

export default card;
