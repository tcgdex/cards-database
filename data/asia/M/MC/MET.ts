import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "基本鋼エネルギー",
	},

	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863287,
			},
		},
	],

	rarity: "None",
};

export default card;
