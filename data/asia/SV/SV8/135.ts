import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミカンのまなざし",
	},

	illustrator: "Fujimoto Gold",
	category: "Trainer",

	effect: {
		'ja-jp': "次の相手の番、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-30」される。（新しく場に出したポケモンもふくむ。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793600,
				tcgplayer: 587697,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Special illustration rare",
};

export default card;
