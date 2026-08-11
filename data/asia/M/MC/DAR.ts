import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "基本悪エネルギー",
	},

	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863286,
			},
		},
	],

	rarity: "None",
};

export default card;
