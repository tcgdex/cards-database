import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "きとうし",
	},

	illustrator: "TOKIYA",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードの持ち主と、自分のポケモン全員にかかっているワザの効果は、すべてなくなる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557067,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
