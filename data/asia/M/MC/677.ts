import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ウタンのみ",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、相手の[P]ポケモンからワザのダメージを受けるとき、そのダメージは「-60」され、このカードをトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863979,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "None",
};

export default card;
