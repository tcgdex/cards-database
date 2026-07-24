import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ムキムキダンベル",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている1進化ポケモンの最大HPは「40」大きくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551131,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
