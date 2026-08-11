import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ぶあついうろこ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている[N]ポケモンが、相手の[G][R][W][L]ポケモンから受けるワザのダメージは「-50」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861407,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "None",
};

export default card;
