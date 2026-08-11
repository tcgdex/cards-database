import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラニュイ",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、相手のバトル場にたねポケモンがいなければ使えない。相手のバトルポケモンについているエネルギーを1個、相手の山札の上にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551196,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
