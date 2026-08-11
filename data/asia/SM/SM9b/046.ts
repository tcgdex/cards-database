import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "メタルコアバリア",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "ポケモンについているこのカードは、相手の番の終わりにトラッシュする。 このカードをつけているポケモンが、相手のポケモンから受けるワザのダメージは「-70」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558164,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
