import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グラジオの決戦",
	},

	illustrator: "DOM",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。この番、自分のポケモン（「ルールを持つポケモン」をのぞく）が使うワザの、相手のバトルポケモンへのダメージは「+80」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888661,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Special illustration rare",
};

export default card;
