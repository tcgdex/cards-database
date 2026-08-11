import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハイパーアロマ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から1進化ポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863952,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",
};

export default card;
