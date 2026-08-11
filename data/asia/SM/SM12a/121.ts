import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダートじてんしゃ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から2枚見て、どちらか1枚を選び、手札に加える。残りのカードはトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544241,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "B",
	rarity: "None",
};

export default card;
