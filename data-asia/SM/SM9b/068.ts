import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "メタルコアバリア",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "ポケモンについているこのカードは、相手の番の終わりにトラッシュする。 このカードをつけているポケモンが、相手のポケモンから受けるワザのダメージは「-70」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558186,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
