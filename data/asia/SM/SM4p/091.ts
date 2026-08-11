import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タイマーボール",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "コインを2回投げ、オモテの数ぶん、自分の山札にある進化ポケモンを、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560124,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
