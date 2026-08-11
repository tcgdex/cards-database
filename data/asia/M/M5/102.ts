import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アイアンディフェンダー",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "次の相手の番、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-30」される。（新しく場に出したポケモンもふくむ。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888647,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
