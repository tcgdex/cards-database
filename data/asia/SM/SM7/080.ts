import { Card } from "models/database/card";
import Set from "../SM7";

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
				cardmarket: 559041,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
