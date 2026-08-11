import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カゲツ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'ja-jp': "相手の手札を見て、その中から「ポケモンのどうぐ」「スタジアム」「特殊エネルギー」を2枚まで選び、トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576199,
				tcgplayer: 569622,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Hyper rare",
};

export default card;
