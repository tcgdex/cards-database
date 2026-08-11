import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アオキの手際",
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべてトラッシュし、自分の山札から「ポケモン」「サポート」「基本エネルギー」を1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863997,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
