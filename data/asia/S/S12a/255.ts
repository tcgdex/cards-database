import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "基本超エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687817,
				tcgplayer: 577530,
			},
		},
	],

	rarity: "Ultra Rare",
};

export default card;
