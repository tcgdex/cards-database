import { Card } from "models/database/card";
import Set from "../SV10";

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
				cardmarket: 821964,
				tcgplayer: 629074,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "Mega Hyper Rare",
};

export default card;
