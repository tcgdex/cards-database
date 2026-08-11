import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルスワール",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、相手のバトル場に1進化ポケモンがいなければ使えない。自分の山札を4枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551191,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
