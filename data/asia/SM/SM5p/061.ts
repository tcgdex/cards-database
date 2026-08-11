import { Card } from "models/database/card";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネルギーリサイクル",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュから基本エネルギーを5枚選び、相手に見せてから、山札にもどす。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559811,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
