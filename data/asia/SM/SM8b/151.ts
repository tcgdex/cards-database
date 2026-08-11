import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エーテル財団職員",
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュにある、名前に「アローラ」とつくポケモンを3枚、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551251,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
