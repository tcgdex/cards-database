import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ふうせん",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンは、にげるためのエネルギーが2個ぶん少なくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863990,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "None",
};

export default card;
