import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "フルフェイスガード",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモン（特性を持つポケモンをのぞく）が、相手のポケモンから受けるワザのダメージは「-20」される。",
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
