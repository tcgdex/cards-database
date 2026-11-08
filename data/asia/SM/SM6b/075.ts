import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ぼんぐり職人",
	},

	illustrator: "Kagemaru Himeno",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にある、名前に「ボール」とつくグッズを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559225,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
