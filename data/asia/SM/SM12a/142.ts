import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メタルコアバリア",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "ポケモンについているこのカードは、相手の番の終わりにトラッシュする。 このカードをつけているポケモンが、相手のポケモンから受けるワザのダメージは「-70」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544346,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "None",
};

export default card;
