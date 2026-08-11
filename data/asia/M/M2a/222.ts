import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャミングタワー",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのポケモン全員についている「ポケモンのどうぐ」の効果は、すべてなくなる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861465,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "Ultra Rare",
};

export default card;
