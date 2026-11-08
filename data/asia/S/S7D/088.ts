import { Card } from "models/database/card";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フルフェイスガード",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモン（特性を持つポケモンをのぞく）が、相手のポケモンから受けるワザのダメージは「-20」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572070,
				tcgplayer: 569411,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Secret Rare",
};

export default card;
